import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Home from "./pages/Home";
import AdminMain from "./pages/AdminMain";
import UserMain from "./pages/UserMain";

import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    userID: null,
    role: "",
    loggedInStatus: false
  });

  useEffect(() => {
    axios.get("http://localhost:3001/login/auth",{
      headers:{
        accessToken: sessionStorage.getItem("accessToken")
    }
    }).then((response) => {
      if (response.data.loggedInStatus) {
        setAuthState({
          username: response.data.username,
          userID: response.data.userID,
          role: response.data.role,
          loggedInStatus: response.data.loggedInStatus
        });
      }
    });
  }, []);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setAuthState({     
      username: "",
      userID: 0,
      role: "",
      loggedInStatus: false
    });
  };

  return (
    <Router>
      <Navbar state={authState} logOut={logout}/>
      <Switch>
        <Route path="/" exact render={(props=authState) => <Main {...props} state={authState}/>} />
        <Route path="/login" exact render={(props) => <Login {...props} state={authState} setStatus={setAuthState}/>} />
        <Route path="/register" exact render={(props) => <Register />} />
        <Route path="/about" exact render={(props) => <About />} />
        <Route path="/home" exact render={(props) => <Home />} />
        <Route path="/admin_main" exact render={(props) => <AdminMain />} />
        <Route path="/user_main" exact render={(props) => <UserMain />} />
        <Route path="/upload" exact render={(props) => <Upload {...props} state={authState}/>} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;