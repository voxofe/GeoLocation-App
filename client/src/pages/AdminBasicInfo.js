import {Link} from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import "../App.css";
import {useParams, useHistory} from 'react-router-dom'
import "../styles/Adminmain.css";
import { CanvasJSChart } from 'canvasjs-react-charts';

function admininfo(props){
    return(
        <div className ="adminmain" >
            
            <h1> Welcome Back Admin, {props.state.username} </h1>
             <div className="col-md-12 text-center">
             <div className="btn-group" role="group" aria-label="a">
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
                </div>
            <h1>Basic Information</h1>
            <p class="groove">
            <table className="status" styles="float: left">
                <tr>
                    <th>Total Users</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
            <table className="status" styles="float: left">
                <tr>
                    <th>Total Unique Domains</th>
                
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
            <table className="status" styles="float: left">
                <tr>
                    <th>Total Unique Internet Service Providers</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
             <table className="status" styles="float: left">
                <tr>
                    <th>Total Entries per status</th>
                    </tr><tr>
                     <td> 
                         <tr>  
                       

                          </tr>
                          </td>
                          
                </tr>
            </table>
            <table className="status" styles="float: left">           
            <tr>
                   <th>Number of Entries per method</th> 
            </tr>
                   <tr>
                   
                    </tr>
                    
            </table>
            
            <table className="status" styles="float: left">
            <tr>
                <th>Average web-object age per CONENT-TYPE</th>
            </tr>
            <tr>
               
            </tr>
                    
            </table>
        </p>
        </div>
    );
}
               


export default admininfo;