import React, { useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useParams, useHistory} from 'react-router-dom'
//import { AuthContext } from "../helpers/AuthContext";
// import "../styles/UserMain.css";

function usermain(props){
    //const { authState } = useContext(AuthContext);
    let history = useHistory();
    
    return(
        <div className ="usermain" >
            <h1> Welcome Back, {props.state.username} </h1>
             <div className="col-md-12 text-center">
             <div className="btn-group" role="group" aria-label="Welcome Back, {props.state.username}">
                <Link to="/editprofile">
                    <button type="button" className="btn btn-secondary">Edit Profile</button>
                </Link>
                <Link to="/upload">
                   <button type="button" className="btn btn-secondary">Upload Data</button>
                </Link>
                <button type="button" className="btn btn-secondary">Visualize Data</button>
                </div>
           </div> 
        </div>
    );
}

export default usermain;