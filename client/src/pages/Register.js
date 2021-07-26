import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Register() {

  const [unavailableEmailMessage, setUnavailableEmailMessage] = useState("");
  
  const initialValues = {
    username: "",
    password: "",
    email: "",
    clearanceLevel: 2
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email').required("Required"),
  });

  const register = (data) => {
    Axios.post("http://localhost:3001/register", data).then((response) => {
      setUnavailableEmailMessage(response.data.message);
    });
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={register}
        validationSchema={validationSchema}
      >
        {Formik => {
          console.log(Formik)
          return(
              <Form className="register">
                <h1>Registration</h1>
                <label>Username</label>
                <ErrorMessage className="validationWarning" name="username" component="span" />
                <Field className="formik_field"
                  name="username"
                  autoComplete="off"
                />
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
                />
                <button type="submit" disabled={!(Formik.isValid)}> Register </button>
              </Form>
            )
          }  
        }
      </Formik>       
      <h3>{unavailableEmailMessage}</h3>
    </div>
  );
}