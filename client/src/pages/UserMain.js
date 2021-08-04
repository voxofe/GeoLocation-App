import React  from "react";
import {Link} from "react-router-dom";
import "../App.css";

function usermain(props){
    
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