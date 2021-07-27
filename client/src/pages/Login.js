import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom'

export default function Login() {

  const [message, setMessage] = useState("");
  const [loggedIn=false, setLoggedIn] = useState("");
  let history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3001/login",{
      headers:{
        accessToken: sessionStorage.getItem("accessToken")
      }
    }).then((response) => {
      setLoggedIn(response.data.loggedIn);  
    });
  }, []);

  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required")
  });

  const login = (data) => {
    Axios.post("http://localhost:3001/login", data).then((response) => {
      setMessage(response.data.message);
      if(response.data.token){
        sessionStorage.setItem("accessToken",response.data.token)
        history.push('/');
      }
    });
  };

  if(!loggedIn){
    return (
      <div className="App">
        <Formik 
          initialValues={initialValues}
          onSubmit={login}
          validationSchema={validationSchema}
        >
          {Formik => {
            return(
              <Form className="login">
                <label>Email</label>
                <ErrorMessage className="validationWarning" name="email" component="span" />
                <Field className="formik_field"
                  name="email"
                  autoComplete="off"
                />
                <label>Password</label>
                <ErrorMessage className="validationWarning" name="password" component="span" />
                <Field className="formik_field"
                  name="password"
                  autoComplete="off"
                  type="password"
                />
                <h4 className="message">{message}</h4>
                <button type="submit">Log In</button>
              </Form>
            )
          }}
        </Formik>       
      </div>
    );
  }else{
    return(   
      <h1>You are already logged in!!</h1>
    )
  }
}




















// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import "../App.css";


// export default function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
//     const [loginStatus, setLoginStatus] = useState("");
  
//     Axios.defaults.withCredentials = true;
  
    
  
//     const login = () => {
//       Axios.post("http://localhost:3001/login", {
//         username: username,
//         password: password,
//       }).then((response) => {
//         if (response.data.message) {
//           setLoginStatus(response.data.message);
//         } else {
//           setLoginStatus(response.data[0].username);
//         }
//       });
//     };
  



//     return (
//         <div className="App">
//           <div className="login">
//             <h1>Login</h1>
//             <input
//               type="text"
//               placeholder="Username..."
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />
//             <input
//               type="password"
//               placeholder="Password..."
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             <button onClick={login}> Login </button>
//           </div>
    
//           <h1>{loginStatus}</h1>
//         </div>
//       );
//     }