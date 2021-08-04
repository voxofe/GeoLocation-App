import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import React from "react";

function Navbar(props) {

  return (
    <div className="navbar">
        <div className="leftSide">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            {props.state.loggedInStatus 
            ?   <div>  
                  {props.state.role==="admin"
                  ?<div>
                      <Link to="/adminmain">Profile</Link>
                    </div>
                  :<div>  
                      <Link to="/usermain">Profile</Link>
                  </div>
                  }  
                </div>  
            :   <div> </div> 
            }
        </div>
        <div className="rightSide">
            {props.state.loggedInStatus 
            ?   <div> 
                  <Link to="/" onClick={props.logOut}>Log Out</Link> 
                </div>  
            :   <div>
                    <Link to="/register">Register </Link>
                    <Link to="/login"> Log In</Link>
                </div> 
            }
            {/* <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button> */}
        </div>
    </div>
  );
}

export default Navbar;