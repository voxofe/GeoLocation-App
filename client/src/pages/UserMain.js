import React from "react";
import {Link} from "react-router-dom";
// import BannerImage from "../assests/logo1.png";

function usermain(){
    return(
        <div className ="userm" >
           <div className = "headerContainer">
               <h1> Welcome Back, </h1>
               <p>User </p>
               <Link to="/logout">
                   <button> Log Out </button>
               </Link>
           </div>
        
        </div>
    );
}

export default usermain;