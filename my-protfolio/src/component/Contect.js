import React, { useState,useContext} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import project from "../images/project.jpg";

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/Contact.css";
import { userContext } from "./MainLayoutOne";
function Contect() {  
  console.log('contect');
  console.log('@@@@@@@@@@@@@@@@@@@@@@');
  const contextInput=useContext(userContext);
  const [state, setstate] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setstate((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const notice = (e) => {
    e.preventDefault();
    console.log(state);
    return state ? alert("Sorry for the inconvince \n message not send \n still working in the backhand.") : null;
  };
  return (
    <div ref={contextInput.contact} className="contact-main">
      <div className="contain-side left-side p-5">
        <div className="mb-5">
          <h1>LOCATION</h1>
        </div>
        <div className="pb-5">
          <h2 className="p-0 m-0">Social Media:</h2>
          <div className="mb-3">
            <a href="https://www.facebook.com/ajay.manger.35/" target="_parent">
              <img src="/icons/facebook.svg" alt="icons" height="20px" />facebook
            </a>
            <a
              href=" https://www.linkedin.com/in/ajay-manger-b7b1b51ab/"
              target="_blank"
            >
              <img src="/icons/linkedin.svg" alt="icons" height="20px" /> linkedin
            </a>
            <a href="https://github.com/AjayPoland" target="_blank">
              <img src="/icons/github.svg" alt="icons" height="20px" /> Github
            </a>
          </div>
          <div>
            <h2 className="p-0 m-0">Contact:</h2>
            <p className="m-0">
              <span>
                <img
                  src="/icons/envelope-solid.svg"
                  alt="icons"
                  height="20px"
                />
                :{" "}
              </span>
              <small>ajaymanger21@gmail.com.</small>
            </p>
            <p className="m-0">
              <span>
                <img src="/icons/phone-solid.svg" alt="icons" height="20px" />:{" "}
              </span>{" "}
              (+48) 609201527
            </p>
          </div>
          <div className="pt-5 pb-0 mt-5">
            <p className="m-0">All right Reserved 2023</p>
          </div>
        </div>
      </div>
      <div className="contain-side right-side p-5">
        <Form onSubmit={notice} className="contact-form">
          <Form.Group>
            <Form.Label className="h1 ">CONTACT ME:</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="Sender Name"
              as="input"
              placeholder="Enter your name."
              onChange={handleInput}
              required
            ></Form.Control>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your valid email address"
              required
              onChange={handleInput}
            ></Form.Control>
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Enter your message"
              required
              onChange={handleInput}
            ></Form.Control>
          </Form.Group>
          <Button className="btn-contct" type="submit" variant="outline-info">
            SUBMIT
          </Button>
        </Form>
      </div>
    </div>
  );
}

export const MemoizedContect=React.memo(Contect);
