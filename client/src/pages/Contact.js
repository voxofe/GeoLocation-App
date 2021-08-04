import React from "react";
import Multiple from "../assests/3959331.jpg";
import "../styles/ContactUs.css";

function Contact() {
    return(
    <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${Multiple})` }}
        ></div>
        <div className="aboutBottom">
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
      </div>
      </div>
        
    );         
}

export default Contact;