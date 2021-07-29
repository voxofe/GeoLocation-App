import React from "react";
//import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import MultiplePizzas from "../assests/3959331.jpg";//Nai den yphrxe multiplepizzas opote ekana allh eikona multiplepizzas
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Lorem 
        </p>
      </div>
    </div>
  );
}

export default About;