import {Link} from 'react-router-dom';
import React from "react";
import "../App.css";
import "../styles/Adminmain.css";
import "../styles/AdminHeader.css";

function adminheader(props){
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
                
                <div className="badstudent">
                </div>
                </div>
            
           </div> 
        </div>
    );
}
               


export default adminheader;