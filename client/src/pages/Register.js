import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Register() {

  const [message, setMessage] = useState("");
  
  const initialValues = {
    username: "",
    password: "",
    email: "",
    role: "user"
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").matches(/(?=.*?[A-ZΑ-Ω])(?=.*?[0-9])(?=.*?[#$*&@])/, "Password must contain at least 1 capital letter, 1 digit and one special character (#$*&@)").required("Required"),
    email: Yup.string().email('Invalid email').required("Required")
  });

  const register = (data) => {
    Axios.post("http://localhost:3001/register", data).then((response) => {
      setMessage(response.data.message);
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
                <button type="submit" disabled={!(Formik.isValid && Formik.submitCount==0)}> Register </button>
              </Form>
            )
          }  
        }
      </Formik>       
      <h3>{message}</h3>
    </div>
  );
}