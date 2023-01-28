import React, { useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

import "../css/MainLayoutOne.css";

import ManuBar from "./ManuBar";
import LoginMain from "./login/LoginMain";
import Login from './Login.js'
import ProfilePic from "./ProfilePic";
import Welcome from './Welcome';
import About from "./About";



export const userContext=React.createContext();
const ContextProvider=userContext.Provider;

export function MainLayoutOne() {
  const margine = "5px";
  const [triger, setTriger] = useState(false);

  const preventScroll=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  useEffect(()=>{
    const bodypage=document.querySelector('.body');
    console.log(triger)
      if(triger){
        bodypage.addEventListener('wheel',preventScroll);
      }
      else if(!triger){
        console.log('hello');
      bodypage.removeEventListener('scroll',preventScroll);
      }
  },[triger])

  return (
    <ContextProvider value={{frmClose:setTriger}}>

    <div className="body pt-4">
      <div className="login-form">
              {triger ? <LoginMain /> : null}{" "}
      </div>
      <Row className="manu-bar fixed-top">
        <Col className='p-0'>
          <ManuBar triger={setTriger} />
        </Col>
      </Row>
      <Row className="home-page">
        <div className="profile">
          <ProfilePic/>
        </div>
        <div className="welcome">
          <Welcome className='welcome'/>
        </div>
      </Row>
      <Row className='About'>
        <Col className='p-0'><About/></Col>
      </Row>
      <Row style={{ height: "10em" }}>
        <Col></Col>
      </Row>
    </div>
    </ContextProvider>
  );
}
