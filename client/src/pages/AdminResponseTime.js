import {Link} from 'react-router-dom';
import React, { useState, useEffect} from "react";
import axios from 'axios'
import "../App.css";
import {useHistory} from 'react-router-dom'
import AdminChart from "../components/AdminChart.js";
import "../styles/Adminmain.css";

function adminresponse(props){
    
      const [wData, setwData]= useState([])


      useEffect(()=>{
          axios.get('http://localhost:3001/adminchart/')
          .then(response=>{
              setwData(response.data)
              console.log(response.data)
          })
          .catch(err=>{
              console.log(err);
          })

      },[])
      
    let history = useHistory();


    
    

    return(
        <div className ="adminmain" >
            
            {/* <h1> Welcome Back Admin, {props.state.username} </h1> */}
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
                
                <AdminChart {...props} waitChartData={wData}/>
                    
           </div> 
        </div>
    );
}
               


export default adminresponse;