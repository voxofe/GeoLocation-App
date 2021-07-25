import React, { useState } from "react";
import Axios from "axios";
import "../App.css";

export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      "username": usernameReg,
      "email": emailReg,
      "password": passwordReg,
      "clearanceLevel": 2
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div className="register">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>
    </div>
  );
}