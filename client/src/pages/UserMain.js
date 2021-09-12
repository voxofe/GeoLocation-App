import React, { useState, useEffect } from "react";
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios'
import * as Yup from "yup";
import "../App.css";
import "../styles/Usermain.css";
import "../styles/Adminmain.css";

function usermain(props){
    
    let history = useHistory();

      const [totalEntries, setTotalEntries] = useState()
      const [lastUploadDate, setLastUploadDate] = useState()
    
      useEffect( () => {
        if(1){
          axios.get(`http://localhost:3001/editprofile/byuserId/${props.state.userID}`).then((response)=>{
            setTotalEntries(response.data.numberOfEntries)
            setLastUploadDate(response.data.lastEntryDate)
          })
        }
      }, [])
    

    return(
        <div>
          
            {/* <h1>For some (CSS) reason this is not rendered and what's underneath is.</h1>  */}
            <h1> Welcome Back, {props.state.username} </h1> 
            <div className="col-md-12 text-center">           
            <div className="btn-group" role="group" aria-label="Welcome Back, {props.state.username}">
                <Link to="/editprofile">
                    <button type="button" className="btn btn-secondary">Edit Profile</button>
                </Link>
                <Link to="/upload">
                   <button type="button" className="btn btn-secondary">Upload Data</button>
                </Link>
                <Link to="/usermap">
                <button type="button" className="btn btn-secondary">Visualize Data</button>
                </Link>
                </div> 
           </div>
            <p className="container">   
            {/* <h3 className="caption"> */} 
              <h4>Total Uploads... {totalEntries}</h4>
              <h4>Last Upload...{lastUploadDate}</h4>
            </p>  
        </div>
        
    )
}
export default usermain;
