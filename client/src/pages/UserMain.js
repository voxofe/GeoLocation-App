import React  from "react";
import {Link} from "react-router-dom";
import "../App.css";
import "../styles/Adminmain.css";

function usermain(props){
    
    return(
        <div>
            <h1>For some (CSS) reason this is not rendered and what's underneath is.</h1> 
            <h2> Welcome Back, {props.state.username} </h2>
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
        </div>
    )
}
export default usermain;