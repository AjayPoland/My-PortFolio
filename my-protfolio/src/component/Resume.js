import React from "react";
import Table from "react-bootstrap/Table";

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "auto",
        backgroundColor: "lightsalmon",
        color: "black",
      }}
    >
      <h1>Resume</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={3}>
              Ajay Manger <br /> Machine Operator <br /> LODZ, POLAND ·
              ajaymanger21@gmail.com · +48 609201527
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Objective</td>
          </tr>
          <tr>
            <td>
              To be associated with a progressive organization that gives me
              scope to update knowledge and skills in accordance with the latest
              technologies and be a part of the team that dynamically works
              towards the growth of the organization and achieve the desired
              goals
            </td>
          </tr>

          <tr>
            <td>Profile</td>
          </tr>
          <tr>
            <td>
              Energetic, ambitious person who has developed a mature and
              responsible approach to any task that I undertake, or situation
              that I am presented with. I am eager to be challenged myself in
              order to grow and further improve my IT skills. My greatest
              passion in life is using my technical knowledge to benefit other
              people and organizations. I want to get back in the field of my
              education, so I am looking forward to build a carrier in IT
              Sector, practicing since last 7 to 8 months using the technology
              mentioned below. Do check out my ongoing projects in the GitHub.
            </td>
          </tr>
          <tr>
            <td>EMPLOYMENT HISTORY:</td>
          </tr>
          <tr>
            <td>
              CNC Operator Wifama prexer
              <br /> Lodz, January 2019- Current.
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
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Teacher, Siliguri <br /> January 2011-November 2018
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
            </td>
          </tr>
          <tr>
            <td>EDUCATION:</td>
          </tr>
          <tr>
            <td>
              B.Sc (IT), Kuvempu University of Karnataka, India. <br /> November
              2013-December 2015 Higher Secondary Examination, <br />
              Krishna Maya Memorial Nepali High School, Siliguri, India. <br />{" "}
              April 2009-March 2011
            </td>
          </tr>
          <tr>
            <td>COURSES:</td>
          </tr>
          <tr>
            <td>
              2yrs Diploma in ANIIT (Software Engineering), National Institute
              of information Technology, Siliguri, India. <br />
              January 2012-December2013
            </td>
          </tr>
          <tr>
            <td>Technical Skills:</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Programming Languages: Java, C#, JavaScript, HTML, CSS,JSX.</li>
                <li>IDE:
              Visual Studio.net.</li>
                <li>Code Editor: Vs Code.</li>
                <li>Library: React,</li>
                <li>Framework: .NET, Bootstrap,</li>
                <li>Version controlling System: Git&GitHub</li>
                <li>Database: SQL Server.</li>
                <li>Software: Microsoft office.</li>
                <li> Operating
              system: Window 8.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Area of Interest:</td>
          </tr>
          <tr>
            <td>
              Object oriented Programming & Concept. Front End development.
            </td>
          </tr>
          <tr>
            <td>Personal Skills:</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Language: Hindi, Bengali, English,
              Polish.</li>
                <li>Mother Tongue: Nepali.</li>
                <li>Hobbies: Playing chess, listing music.</li>
                <li>Key Strength:
                  <ul>
                    <li>Positive thinking.</li>
                    <li>Open to any challenging work.</li>
                    <li>Team work,
              Regular.</li>
                    <li>Good learner by observation.</li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Resume;
