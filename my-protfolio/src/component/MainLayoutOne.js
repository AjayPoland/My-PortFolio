import React, { useState, useEffect,useRef} from "react";
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
import Resume from "./Resume";
import Project from "./Project";
import Contect from './Contect';



export const userContext=React.createContext();
const ContextProvider=userContext.Provider;

export function MainLayoutOne() {
  const [triger, setTriger] = useState(false);
  
  function handleEvent(erg){
      setTriger(erg);
      console.log('handleEvnet'+erg);
  }
  
  return (
    <ContextProvider value={{frmClose:handleEvent}}>
      
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
      <Row className='contain'>
        <Col className='p-0'><About/></Col>
      </Row>
      <Row className='contain'>
        <Col className='p-0'>
          <Resume/>
        </Col>
      </Row>
      <Row className='contain'>
        <Col className='p-0'>
          <Project/>
        </Col>
      </Row>
      <Row className='contain'>
        <Col className='p-0'>
          <Contect/>
        </Col>
      </Row>
    </div>
    </ContextProvider>
  );
}
