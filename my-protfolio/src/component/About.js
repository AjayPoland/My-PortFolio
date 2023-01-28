import React from "react";

//styling bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//external css
import'../css/About.css'

function About() {
  return (
    <div className="about-home p-4 rounded-2">
      <h1 className=" about-heading">About</h1>
      <div className=" about-body m-4">
      <p>
        I am from India. Currently I am living in Poland since last few years.
        After working here, I realize that I am in the wrong path. So,decidede
        to focused to built the carrier in the field of which i belong too. In
        the year 2015 I complete my study in computer science , but
        unfertunately I didn't dived into the IT sector. Nowdays I felt myself
        guilty so, decided to carry forward my IT skills and keep update myself
        with the new technquie, skill of programming.
      </p>
      <p>
        {" "}
        Since last 1 year I am studing and preparing for the Job interview and
        made a habite of learning programming everyday atleast for more then
        2hours and sometime the whole day. I enjoy programming and making
        something creative everyday. Finding bugs and fixing it, not repeating
        the same code multiple times is my key strength. I am the good learner
        and love to work in the team.
      </p>
      <p>
        {" "}
        The resources, i am using for learning programming are the open source
        and physical books of my institute(NIIT) India .I belive as a fresher
        that I can help the people, organisation working in IT sector.</p>
        <strong>
        Some of
        my recent projects are listed below, do check it out.{" "}
        </strong>
      </div>
    </div>
  );
}

export default About;
