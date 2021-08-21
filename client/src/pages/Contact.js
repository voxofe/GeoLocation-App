import React, { useEffect, useState } from "react";
import Multiple from "../assests/3959331.jpg";
import "../styles/ContactUs.css";

function Contact() {
    return(
    <div className="contact">
        <div
          className="contactTop"
          style={{ backgroundImage: `url(${Multiple})` }}
        ></div>
        <div className="contactBottom">
          <h1> Student Information</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>AM</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Andreas Kostas</td>
                <td>230000</td>
                <td>230000@upnet.gr</td>
              </tr>
              <tr>
                <td>Nikolaos Nikolaou</td>
                <td>230000</td>
                <td>230000@upnet.gr</td>
              </tr>
              <tr>
                <td>Christina Sialma</td>
                <td>235962</td>
                <td>235962@upnet.gr</td>
              </tr>
            </tbody>
          </table>
          
          
          
          {/* <p>
            Name: Andreas Kostas AM: 230000 Email: 230000@upnet.gr
          </p>
          <p>  
            Name: Nikolaos Nikolaou AM: 230000 Email: 230000@upnet.gr
          </p>
          <p>  
            Name: Christina Sialma AM: 235962 Email: 235962@upnet.gr
          </p> */}
      </div>
      </div>
        
    );         
}

export default Contact;