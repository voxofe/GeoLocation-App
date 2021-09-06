import {Link} from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import "../App.css";
import {useParams, useHistory} from 'react-router-dom'
import AdminChart from "../components/AdminChart.js";
import "../styles/Adminmain.css";

const adminresponse=(props)=>{
    // let history = useHistory();
    // const [waitData, setContentWait] = useState([]);
    
    // useEffect( ()=>{
    //     axios.get('http://localhost:3001/adminchart/').then((response)=>{
        
    //     setContentWait(response.waitData)
    //     }
    //     )
    // },[])

    // const renderTable = () =>{
    //     return waitData.map( info =>{
    //         return(
    //             <tr>
    //                 <td>{info.wait}</td>
    //             </tr>
    //         )
    //     })
    // }
      const [Data, setData]= useState({
          waits:'',
          types:''
      })

      useEffect(()=>{
          axios.get('http://localhost:3001/adminchart/')
          .then(response=>{
              let contentData = response.data;
              setData({wait: contentData.wait, content: contentData.content_type})
              console.log(response)
              console.log('wait:', response.data.wait)
          })
          .catch(err=>{
              console.log(err);
          })

      },[])
      
    


    
    

    return(
        <div className ="adminmain" >
            
            <h1> Welcome Back Admin, {props.state.username} </h1>
             <div className="col-md-12 text-center">
             <div className="btn-group" role="group" aria-label="Welcome Back Admin, {props.state.username}">
                <Link to="/admininfo">
                    <button type="button" className="btn btn-secondary">Basic Information</button>
                </Link>
                <Link to="/adminresponse">
                   <button type="button" className="btn btn-secondary">Response Time</button>
                </Link>
                <Link to="/adminheader">
                <button type="button" className="btn btn-secondary">Header Analysis</button>
                </Link>
                <Link to="/adminvizualize">
                <button type="button" className="btn btn-secondary">Vizualize Data</button>
                </Link>
                </div>
                <h1>{Data.wait}</h1>
                <AdminChart/>
                
                
           </div> 
        </div>
    );
}
               


export default adminresponse;