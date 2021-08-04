import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EditProfile from "./pages/EditProfile";
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
        <Route path="/contact" exact render={(props) => <Contact />} />
        <Route path="/home" exact render={(props) => <Home />} />
        <Route path="/adminmain" exact render={(props) => <AdminMain  {...props} state={authState}/>} />
        <Route path="/usermain" exact render={(props) => <UserMain  {...props} state={authState}/>} />
        <Route path="/upload" exact render={(props) => <Upload {...props} state={authState}/>} />
        <Route path="/editprofile" exact render={(props) => <EditProfile {...props} state={authState} setStatus={setAuthState}/>} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;