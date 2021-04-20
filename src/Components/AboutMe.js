import React from "react";
import "../Styles/aboutMe.css";
import FrontEndImg from "../Images/frontEnd.webp";
import BackEndImg from "../Images/backEnd.webp";

const AboutMe = () => {
  return (
    <div className="container-fluid about-me">
      <div className="text-center">
        <h1>About Me</h1>
        <hr />
      </div>
      <div className="row front-end">
        <img src={FrontEndImg} id="invisible-skills-img" />

        <ul>
          <b>FRONT-END SKILLS</b>
          <li>-> ReactJS </li>
          <li>-> HTML / CSS </li>
          <li>-> TypeScript / JavaScript </li>
          <li>-> Material UI</li>
          <li>-> React Native</li>
          <li>-> Redux</li>
        </ul>
        <img src={FrontEndImg} id="skills-img-disappear" />
      </div>

      <div className="row back-end">
        <img src={BackEndImg} id="skills-img" />

        <ul>
          <b>BACK-END SKILLS</b>
          <li> -> NodeJs / ExpressJS </li>
          <li> -> GraphQL / Apollo </li>
          <li> -> MySQL / PostgreSQL</li>
          <li> -> MongoDB </li>
          <li> -> AWS - EC2, S3, Route 53 </li>
          <li> -> REST </li>
        </ul>
      </div>

      <div className="row extra-skills">
        Python | Data Structures and Algorithms | Object Oriented Programming |
        Software Design and Architectures - SOLID, MVC, Microservices | Git |
        NPM and Yarn | C# Unity Engine
      </div>

      <div
        className="row extra-skills-invisible"
        style={{ textJustify: "center" }}
      >
        <ul>
          <li> -> JAVA Object Oriented Programming </li>
          <li> -> Unity Engine With C# </li>
          <li> -> Photoshop CC </li>
          <li> -> Blender 3D Modelling </li>
        </ul>
      </div>

      <div
        className="row text-center justify-content-center about-description"
        style={{ marginBottom: 20 }}
      >
        <div className="col-sm-6">
          <p>
            I can work on both the front-end and the back-end of any
            application. I am also experienced with building scalable projects,
            and managing large code bases. Currently, I am a student at the
            University Of British Columbia. On my spare time I work on various
            different projects to build my skills and continue learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
