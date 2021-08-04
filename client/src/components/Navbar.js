import Logo from "../assests/logo_transparent1.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
// import {AuthContext} from "./../helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function Navbar(props) {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
        {/* <AuthContext.Provider value={{ authState, setAuthState }}> */}
        <div className="rightSide">
            <Link to="/"> Home </Link>
            {/* <Link to="/menu"> Menu </Link> */}
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>

            {props.state.loggedInStatus 
            ?   <div>  
                {props.state.role=="admin"
                ?<div>
                    <Link to="/adminmain">Profile</Link>
                    <Link to="/" onClick={props.logOut}>Log Out</Link>
                  </div>
                :<div>
                    
                    <Link to="/usermain">Profile</Link>
                    <Link to="/" onClick={props.logOut}>Log Out</Link>
                </div>
                }  
                </div>  
            :   <div>
                    <Link to="/login"> Log In</Link>
                </div> 
            }
            <Link to="/register">Register </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default Navbar;