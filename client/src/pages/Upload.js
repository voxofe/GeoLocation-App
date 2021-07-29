import React,{useState, useEffect} from 'react';
import Axios from "axios";
import "../App.css";
import {Formik, Form, ErrorMessage} from 'formik'
import filterOut from '../scripts/transform'

function Upload() {

  const [harFile, setHarFile] = useState();
  const [uploadChoice, setChoice] = useState("");
  const [ip, setIP] = useState("");
  const [userID, setUserID] = useState();

  const getGeoLocData = async () => {
    const geolocation = await Axios.get("http://localhost:3001/upload/fetchClientIP")
    setIP(geolocation.data.IPv4)
  }
  
  useEffect( () => {
    getGeoLocData()
    Axios.get("http://localhost:3001/login",{
      headers:{
        accessToken: sessionStorage.getItem("accessToken")
      }
    }).then((response) => {
      setUserID(response.data.userID) 
    });
  }, [])

  const filterSensitive= async (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = (e) => {
      let filteredJSON = filterOut(JSON.parse(e.target.result));
      setHarFile(filteredJSON);
    };
  }

  const readRadio = () => {

  }

  const onSubmit = (e) => {
    harFile.userIP = ip;
    harFile.userID = userID;
    if(ip){
      Axios.post("http://localhost:3001/upload", harFile).then( (response) => {
        console.log(response);
      });
    }
  };

  return (
    <div className="App">
      <div className="upload">
        <input 
        className="formik_field" 
        type="file" 
        onChange={filterSensitive} 
        />
        <div>
          <label>Save Locally</label>
          <input 
            type="radio"
            onChange={readRadio}
            />
        </div>
        <div>
          <label>Upload to Server</label>
          <input 
            type="radio"
            onChange={readRadio}
          />
        </div>
        <button className="formik_field" onClick={onSubmit}>
          Submit
        </button>
      </div>
      <h4>{ip}</h4>
      <h4>{userID}</h4>
    </div>
  );
}

export default Upload
