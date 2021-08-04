import React from "react";
import "../App.css";

function adminmain(props){
    return(
        <div className ="adminmain" >
           <div className = "headerContainer">
               <h1> Welcome Back Admin, </h1>
               <p>{props.state.username} </p>
               
           </div>
        
        </div>
    );
}

export default adminmain;