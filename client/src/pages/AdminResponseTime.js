import {Link} from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import "../App.css";
import {useParams, useHistory} from 'react-router-dom'
import AdminChart from "../components/AdminChart.js";
import "../styles/Adminmain.css";

function adminresponse(props){
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
                <AdminChart/>
            
           </div> 
        </div>
    );
}
               


export default adminresponse;