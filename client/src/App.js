import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact render={(props) => <Login />} />
        <Route path="/register" exact render={(props) => <Register />} />
        <Route path="/" exact render={(props) => <Main />} />
        <Route path="/upload" exact render={(props) => <Upload />} />
      </Switch>
    </Router>
  );
}

export default App;