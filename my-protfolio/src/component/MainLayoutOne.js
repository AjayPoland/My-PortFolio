import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

import "../css/MainLayoutOne.css";

import {MemoizedManuBar} from "./ManuBar";
import {MemoizedLoginMain} from "./login/LoginMain";
import {MemoizedProfilePic} from "./ProfilePic";
import {MemoizedWelcome} from "./Welcome";
import {MemoizedAbout} from "./About";
import {MemoizedResume} from "./Resume";
import {MemoizedProject} from "./Project";
import {MemoizedContect} from "./Contect";

export const userContext = React.createContext();
const ContextProvider = userContext.Provider;

function MainLayoutOne() {
  const [triger, setTriger] = useState(false);
  const home = useRef();
  const about = useRef();
  const resume = useRef();
  const project = useRef();
  const contact = useRef();

  const [style,setStyle]=useState({})

  function handleEvent(arg) {
    setTriger(arg);
    console.log("handleEvnet " + arg);
  }
  function testhandle(arg) {
    console.log(arg);
    arg.current.scrollIntoView({block:"end",inline:"nearest", behavior: "smooth" });
  }
  function testhandle2(arg) {
    console.log(arg);
    arg.current.scrollIntoView({block:"center",inline:"nearest", behavior: "smooth" });
  }

  function scrollhandle(arg){
    arg.current.scrollIntoView({block:"start", behavior: "smooth" });
  }

  return (
    <ContextProvider
      value={{
        frmClose: handleEvent,
        testhandle: testhandle,
        testhandle2: testhandle2,
        scrollhandle:scrollhandle,
        home: home,
        about: about,
        resume: resume,
        project: project,
        contact: contact,
      }}
    >
      <div className="body pt-4">
        <div className="login-form">{triger ? <MemoizedLoginMain /> : null} </div>
        <Row className="manu-bar">
          <Col className="p-0">
            <MemoizedManuBar triger={setTriger} />
          </Col>
        </Row>
        <Row className="home-page">
          <div className="profile">
            <MemoizedProfilePic />
            {/* <ProfilePic /> */}
          </div>
          <div className="welcome">
            <MemoizedWelcome className="welcome" />
          </div>
        </Row>
        <Row className="contain">
          <Col className="p-0">
            <MemoizedAbout />
          </Col>
        </Row>
        <Row className="contain">
          <Col className="p-0">
            <MemoizedResume />
          </Col>
        </Row>
        <Row className="contain">
          <Col className="p-0">
            <MemoizedProject />
          </Col>
        </Row>
        <Row className="contain">
          <Col className="p-0">
            <MemoizedContect />
          </Col>
        </Row>
      </div>
    </ContextProvider>
  );
}
export default React.memo(MainLayoutOne);