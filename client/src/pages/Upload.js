import React,{useState, useEffect} from 'react';
import axios from "axios";
import "../App.css";
import filterOut from '../scripts/transform'

function Upload(props) {

  const [harFile, setHarFile] = useState();
  const [uploadChoice, setChoice] = useState("");
  const [ip, setIP] = useState("");
  const [harFileHasBeenFiltered, setHarFileHasBeenFiltered] = useState(false);
  const [message, setMessage] = useState("");

  const getGeoLocData = async () => {
    const geolocation = await axios.get('https://geolocation-db.com/json/')
    setIP(geolocation.data.IPv4)
  }
  
  useEffect( () => {
    getGeoLocData()
  }, [])

  const filterSensitive= async (e) => {
    setMessage("");
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = (e) => {
      let filteredJSON = filterOut(JSON.parse(e.target.result));
      setHarFile(filteredJSON);
      setHarFileHasBeenFiltered(true);
    };
  }

  const readRadio = (e) => {
    setChoice(e.target.value)
  }

  const onSubmit = () => {
    harFile.userIP = ip;
    harFile.userID = props.state.userID;
    if(uploadChoice==="server"){
      axios.post("http://localhost:3001/upload", harFile).then( (response) => {
        setMessage(response.data.message)
      });
    }else if(uploadChoice==="local"){
      const harText = JSON.stringify(harFile)
      localStorage.setItem("harFile", harText)
      setMessage("Saved locally!")
    }else{
      alert("You must choose an upload option!");
    }
  };

  return (
    <div className="App">
      <div className="upload">
        <input 
        style={{color: "white"}}
        className="formik_field" 
        type="file" 
        onChange={filterSensitive} 
        />
        <div>
          <label  className="caption">Save Locally</label>
          <input 
            type="radio"
            value="local"
            name="uploadChoice"
            onChange={readRadio}
            />
        </div>
        <div>
          <label className="caption">Upload to Server</label>
          <input 
            type="radio"
            value="server"
            name="uploadChoice"
            onChange={readRadio}
          />
        </div>
        <h4 className="caption">{message}</h4>
        <button className="formik_field" onClick={onSubmit} disabled={!(ip && harFileHasBeenFiltered)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Upload
