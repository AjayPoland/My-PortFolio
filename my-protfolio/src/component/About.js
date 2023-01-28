import React from "react";

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
//external css
import "../css/About.css";

function About() {
  return (
    <div className="about-home p-4 rounded-2">
      <h1 className=" about-heading">About</h1>
      <div className=" about-body m-4">
        <p>
          My birth country is India, I grew up there. I did my schooling in
          India.{" "}
          <span className="fw-bold">
            The languages in which i am fluent are (English, Hindi, Nepali,
            Bengali).
          </span>{" "}
          Currently I am living in Poland since last few years. After working
          here, I realize that I am in the wrong path. So, decideded to focused
          to built the carrier in the field of which i belong too.{" "}
          <span className="fw-bold">
            In the year 2015 I completed my study in computer science{" "}
          </span>
          , but unfertunately I didn't dived into the IT sector. Now i am
          looking for the opertunity to show my skills and keeping myself update
          with the new technquie, skill of programming.
        </p>
        <p>
          {" "}
          Since last 1 year I am studing and preparing for the Job interview and
          made a habite of learning programming everyday atleast for more then
          2hours and sometime the whole day.
          <span className="fw-bold">
            {" "}
            I enjoy programming and making something creative everyday. Finding
            bugs and fixing it, not repeating the same code multiple times is my
            key strength.
          </span>{" "}
          I am the good learner and love to work in the team.
        </p>
        <p>
          {" "}
          The resources, i am using for learning programming are the{" "}
          <span className="fw-bold">
            open source and physical books of my institute(NIIT) India{" "}
          </span>
          .I belive as a fresher that I can help the people, organisation
          working in IT sector.
        </p>
        <span className="fw-bold">
          Some of my recent projects are listed below, do check it out.{" "}
        </span>
      </div>
    </div>
  );
}

export default About;
