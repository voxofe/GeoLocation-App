import React, { useEffect, useState } from "react";
import Axios from "axios";

import User from "../components/User";
import Admin from "../components/Admin";

export default function Main() {
  const [role, setRole] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  // Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login",{
      headers:{
        accessToken: sessionStorage.getItem("accessToken")
      }
    }).then((response) => {
      if (response.data.loggedIn) {
        setLoggedInUser(response.data.username);
        setRole(response.data.role);  
      }
    });
  }, []);

  return (
    <div>
      <h2>Welcome to the Main Page!!</h2>
      <h3>Username: {loggedInUser}</h3>
      <h3>Role: {role}</h3>
    </div>
  );
}