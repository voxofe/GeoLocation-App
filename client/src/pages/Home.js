import React from "react";
import {Link} from "react-router-dom";
// import BannerImage from "../assests/logo1.png";

function Home(){
    return(
        <div className ="home" >
           <div className = "headerContainer">
               <h1> ANC presents </h1>
               <p>Crowdsourcing and Analysis of HTTP Traffic Data </p>
               
           </div>
        
        </div>
    );
}

export default Home;