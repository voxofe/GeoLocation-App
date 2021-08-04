import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

function EditProfile(props) {

  // const [newUsername, setNewUsername] = useState("");
  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");

  let history = useHistory();

  const initialValues = {
    newUsername: "",
    oldPassword: "",
    newPassword: ""
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().min(8, "Password must be at least 8 characters").matches(/(?=.*?[A-ZΑ-Ω])(?=.*?[0-9])(?=.*?[#$*&@])/, "Password must contain at least 1 capital letter, 1 digit and one special character (#$*&@)"),
    oldPassword: Yup.string().when("newPassword", {
      is: value => value && value.length > 0,
      then: Yup.string().required(
          "Old password is required when setting new password"
      ),
      otherwise: Yup.string()
    })
  });

  const changeInfo = (data) => {
    axios
      .put(
        "http://localhost:3001/editprofile", data,
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        }else{
          sessionStorage.setItem("accessToken",response.data.token)
          props.setStatus({
            username : response.data.username,
            role : response.data.role,
            userID : response.data.userID,
            loggedInStatus : response.data.loggedInStatus
          })
          history.push('/');
        }
      });
  };

  

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={changeInfo}
        validationSchema={validationSchema}
      >
        {Formik => {
          return(
              <Form className="editProfile">
                <div className="caption">
                  <label>Change Your Username</label>
                  <Field type="checkbox" />
                </div>
                <Field className="formik_field"
                  name="newUsername"
                  autoComplete="off"
                  placeholder = "New Username..."
                />
                <div className="caption">
                  <label>Change Your Password</label>
                  <Field type="checkbox" />
                </div>
                <Field className="formik_field"
                  name="oldPassword"
                  autoComplete="off"
                  type="password"
                  placeholder = "Old Password..."
                />
                <ErrorMessage className="validationWarning" name="oldPassword" component="span" />
                <Field className="formik_field"
                  name="newPassword"
                  autoComplete="off"
                  type="password"
                  placeholder = "New Password..."
                />
                <ErrorMessage className="validationWarning" name="newPassword" component="span" />
                <button type="submit" className="formik_field" >Save Changes</button>
              </Form>
            )
          }  
        }
      </Formik>       
    </div>
  );
  //   <div>
  //     <h1>Change Your Username</h1>
  //     <input
  //       type="text"
  //       placeholder="New Username..."
  //       onChange={(event) => {
  //         setNewUsername(event.target.value);
  //       }}
  //     />
  //     <button onClick={changeInfo}> Save Changes</button> 

  //     <h1>Change Your Password</h1>
  //     <input
  //       type="password"
  //       placeholder="Old Password..."
  //       onChange={(event) => {
  //         setOldPassword(event.target.value);
  //       }}
  //     />
  //     <input
  //       type="password"
  //       placeholder="New Password..."
  //       onChange={(event) => {
  //         setNewPassword(event.target.value);
  //       }}
  //     />
  //     <button onClick={changeInfo}> Save Changes</button>
  //   </div>
  // );
}

export default EditProfile;