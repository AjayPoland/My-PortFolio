import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge'

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

//external styling.
import "./css/LoginMain.css";

function LoginMain() {
  const [isSingIn, setIsSingIn] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [userData, setUserData] = useState();

  const setSingInInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const setSingUpInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    //alert("Your are successfully loged-In");
    //e.preventDefault();
    if (isSingIn===true&&userInfo!=="") {
      alert(`Your Entered Data:\n` + JSON.stringify(userInfo));
      return;
    } else if (isSingIn===false) {
      alert(`Your Entered Data:\n` + JSON.stringify(userData));
      return;
    }
  };

  const handleSignIn = (isSingBool) => {
    console.log("heello");
    setIsSingIn(isSingBool);
  };

  const singin = () => {
    if (isSingIn) {
      return (
        <SingIn setInput={setSingInInput} handleSubmit={handleOnSubmit}>
          <div className='singin-form'
          >
            <button className="custom-singin-button btn mb-3" type="submit">
              sing in
            </button>
            <div></div>
            <button
              className="custom-singup-button btn"
              onClick={() => handleSignIn(false)}
            >
              sing up
            </button>
            <p>Don't have an account!</p>
          </div>
        </SingIn>
      );
    }
  };
  const singup = () => {
    if (!isSingIn) {
      return (
        <SingUp setInput={setSingUpInput} handleSubmit={handleOnSubmit}>
          <div className="singup-form"
          >
            <button className="custom-singup-button btn mb-3" type="submit">
              sing up
            </button>
            <div></div>
            <button
              className="custom-singinbutton btn btn-info fw-bold"
              onClick={handleSignIn}
            >
              sing in
            </button>
            <p>Already have an account!</p>
          </div>
        </SingUp>
      );
    }
  };

  return (
    <div
      className="card border border-3 text-bg-success rounded-3'"
      style={{
        maxWidth: "100%",
        minWidth: "400px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%",
      }}
    >
      {singin()}
      {singup()}
      <div className="text-center mb-1">
      <Badge variant='info'>This page is desing using normal Css and even Bootstrap</Badge>
      </div>
    </div>
  );
}

export default LoginMain;
