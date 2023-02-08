import React from "react";
//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

//external css.
import "../css/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="title fw-bold">
        <h1 className="fw-bold">Resume</h1>
      </div>
      <div className="container grid-container">
        <div className="name">
          <h1 className="d-inline-block">Ajay Manger.</h1>
          <p className="d-inline">
            &nbsp; IT Professional, Developer & Programmer.
          </p>
        </div>
        <div className="grid-container1">
          <div className="obj">
            <h3>OBJECTIVE:</h3>
            <div>
              To be associated with a progressive organization that gives me
              scope to update knowledge and skills in accordance with the latest
              technologies and be a part of the team that dynamically works
              towards the growth of the organization and achieve the desired
              goals.
            </div>
          </div>
          <div className="profile">
            <h3>PROFILE:</h3>
            <div>
              Energetic, ambitious person who has developed a mature and
              responsible approach to any task that I undertake, or situation
              that I am presented with. I am eager to be challenged myself in
              order to grow and further improve my IT skills. My greatest
              passion in life is using my technical knowledge to benefit other
              people and organizations. I want to get back in the field of my
              education, so I am looking forward to build a carrier in IT
              Sector, practicing since last 7 to 8 months using the technology
              mentioned below. Do check out my ongoing projects in the GitHub.
            </div>
          </div>
          <div className="emp-history">
            <h3>EMPLOYMENT HISTORY:</h3>
            <div>
              <h2>Machine Operator, Wifama Prexer. Lodz, Poland <span>
                <img src="/icons/poland.png" alt= 'icons' height="20px" /> .{" "}
              </span></h2>
              <small className="text-muted">Dec 2018 — Present</small>
              <ul>
                <li>
                  {" "}
                  Met production goals in terms of cycle time, quantity and
                  quality
                </li>
                <li>
                  Maintained continuity among work shifts by documenting
                  andcommunicating actions and irregularities{" "}
                </li>
                <li>
                  Performed parts inspection in accordance with quality
                  requirements set forth for that component.
                </li>
                <li>add more..</li>
              </ul>{" "}
              <br />
              <h2>Teacher, Freelancer, Siliguri, India. <span>
                <img src="/icons/india.png" alt= 'icons' height="20px" /> .{" "}
              </span></h2>
              <small className="text-muted">January 2011-November 2018</small>
              <ul>
                <li>
                  Subjects included are Methematics, Physics, Chemistery and
                  English.
                </li>
                <li>
                  provide good quality of education to the student from class 1
                  to 10th standard
                </li>
                <li> Promoted fun and learning each and every day.</li>
                <li>
                  Assisting pupils to develop their social, emotional and
                  behavioral skills.
                </li>
                <li>
                  Aware of and using new media like the internet to promote
                  interactive learning.
                </li>
                <li>Add more....</li>
              </ul>
            </div>
          </div>
          <div className="education">
            <h3>EDUCATION:</h3>
            <div>
              <h2 className=" mb-0 pb-0">
                B.Sc (IT), Kuvempu University of Karnataka, India.
              </h2>
              <small className="text-muted">November 2013-December 2015</small>
              <h2 className="mt-3 mb-0 pb-0">
                Higher School Diploma Krishna Maya Memorial Nepali High School,
                Siliguri, India.
              </h2>{" "}
              <small className="text-muted">April 2009-March 2011</small>
            </div>
          </div>
          <div>
            <h3>COURSES:</h3>
            <div>
              <h2 className="mb-0 pb-0">
                2yrs Diploma in ANIIT (Software Engineering), National Institute
                of information Technology, Siliguri, India.
              </h2>{" "}
              <small className="text-muted">January 2012-December2013</small>
            </div>
          </div>
        </div>
        <div className="grid-container2">
          <div>
            <h3>Details:</h3>
            <div className="px-3">
              Address:{" "}
              <small><span>
                <img src="/icons/location.svg" alt= 'icons' height="20px" />{" "}
              </span><div className="mapouter"><div className="gmap_canvas"><iframe width="auto" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=Gen.%20Romualda%20Traugutta%204,%2090-001%20%C5%81%C3%B3d%C5%BA&t=&z=13&ie=UTF8&iwloc=&output=embed" title='map'/><a href="https://123movies-to.org">123movies</a><br/><a href="https://www.embedgooglemap.net">embed code for google map</a></div></div>Gen. Romualda Traugutta 4, 90-001 Łódź</small>
              <br />
              <span>
                <img src="/icons/envelope-solid.svg" alt= 'icons' height="20px" />:{" "}
              </span><small>ajaymanger21@gmail.com.</small>
              &nbsp;<span>
                <img src="/icons/phone-solid.svg" alt= 'icons' height="20px" />:{" "}
              </span> (+48) 609201527
              <br />
              <span>
                <img src="/icons/whatsapp.svg" alt= 'icons' height="20px" />:{" "}
              </span>{" "}
              +48 609201527
              &nbsp;
              <span>
                <img src="/icons/facebook.svg" alt= 'icons' height="20px" />:{" "}
              </span>
              <a
                href="https://www.facebook.com/ajay.manger.35/"
                target="_blank"
              >
                {" "}
                facebook
              </a>{" "}
              <br />
              <span>
                <img src="/icons/linkedin.svg" alt= 'icons' height="20px" />:{" "}
              </span>
              <a
                href=" https://www.linkedin.com/in/ajay-manger-b7b1b51ab/"
                target="_blank"
              >
                LinkedIn
              </a>
              &nbsp;
              <span>
                <img src="/icons/github.svg" alt= 'icons' height="20px" />:{" "}
              </span>
              <a href="https://github.com/AjayPoland" target="_blank">
                GitHub
              </a>
              <br />
              Date of birth: <small>01-01-1992</small> &nbsp; Nationality:{" "}
              <small>Indian </small>
            </div>
          </div>
          <div className="tch-skills">
            <h3>Technical Skills:</h3>
            <ul>
              <li>Programming Languages: Java, C#,  JavaScript,  HTML, CSS,JSX.</li>
              <li>IDE:   Visual Studio.net.</li>
              <li>Code Editor:   Vs Code.</li>
              <li>
              Library: React,
              </li>
              <li>Library: React,</li>
              <li>Framework: .NET, Bootstrap,</li>
              <li>Version controlling System: Git&GitHub</li>
              <li>Database: SQL Server.</li>
              <li>Software: Microsoft office.</li>
              <li>Operating system: Window 8.</li>
            </ul>
          </div>

          <div className="prs-skills">
            <h3>Personal Skills:</h3>
            <ul>
              <li>Language: Hindi, Bengali, English, Polish.</li>
              <li>Mother Tongue: Nepali.</li>
              <li>Hobbies: Playing chess, listing music.</li>
              <li>
                Key Strength:
                <ul>
                  <li>Positive thinking.</li>
                  <li>Open to any challenging work.</li>
                  <li>Team work, Regular.</li>
                  <li>Good learner by observation.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3>Area of Interest:</h3>
            <p className="px-3">
              Object oriented Programming & Concept. Front End development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
