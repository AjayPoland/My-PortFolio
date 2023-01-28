import React, { useState } from "react";

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

//external styling.
import "../../css/LoginMain.css";

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
    if(isSingIn===false)
    alert("Succesfully singed up");
    else
    alert("Successfully singed in");
    //e.preventDefault();
    
  };

  const handleSignIn = (isSingBool) => {
    console.log("heello");
    setIsSingIn(isSingBool);
  };

  const singin = () => {
    if (isSingIn) {
      return (
        <SingIn setInput={setSingInInput} handleSubmit={handleOnSubmit}>
          <div className='singin-button'
          >
            <button className="custom-singin-button btn" type="submit">
              sing in
            </button>
            <button
              className="custom-singup-button btn"
              onClick={() => handleSignIn(false)}
            >
              Sing up
            </button>
            <p className='mt-2'>Don't have an account! <span className="badge text-bg-secondary">Sing up</span></p>
          </div>
        </SingIn>
      );
    }
  };
  const singup = () => {
    if (!isSingIn) {
      return (
        <SingUp setInput={setSingUpInput} handleSubmit={handleOnSubmit}>
          <div className="singup-button"
          >
            <button className="custom-singup-button btn" type="submit">
              sing up
            </button>
            <div></div>
            <button
              className="custom-singin-button btn fw-bold"
              onClick={handleSignIn}
            >
              sing in
            </button>
          <p className='mt-2'>Already have an account! <span className="badge text-bg-info" >Sing in</span></p>
          </div>
        </SingUp>
      );
    }
  };

  return (
    <div
      className="login-main card"  style={{ width: "25vw" }}>
      {singin()}
      {singup()}
    </div>
  );
}

export default LoginMain;
