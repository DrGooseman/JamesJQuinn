import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="App-header-fixed-parent">
      <header className="App-header">
        <img src={"/images/profpic.jpg"} alt="profile pic" />
        <h3>James Quinn</h3>
        <p>
          <i className="far fa-envelope"></i> JamesJQuinn12@gmail.com
        </p>

        <h4>American programmer living in Moscow.</h4>
        <h4>Aspiring full-stack developer.</h4>
        <h4>Experienced in game dev / virtual reality.</h4>
        <h4></h4>

        <h4></h4>

        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto flex-column">
            <Nav.Link as={NavLink} exact to={"/"}>
              About Me
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/webapps"}>
              Web Apps
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/games"}>
              Games
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/resume"}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar>
        <h4></h4>

        <h4></h4>
        {/* <NavLink to={`/`}>Dashboard</NavLink>
<NavLink to={`/poop`}>Dashboard</NavLink> */}
        <a
          href="https://github.com/DrGooseman"
          className="side-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jamesjquinn/"
          className="side-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.xing.com/profile/James_Quinn11/cv"
          className="side-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-xing-square"></i>
        </a>
        <a
          href="https://www.hackerrank.com/jamesjquinn12"
          className="side-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-hackerrank"></i>
        </a>

        {/* <img className="icon" src="/images/hh.ico" alt="hh" /> */}
        <h4></h4>

        <h4></h4>
        <h4>
          Want to see this smiling face working at your company?
          <i className="fas fa-smile"></i>
        </h4>
        <h4>
          Want to get together and program?<i className="fas fa-code"></i>
        </h4>
        <h4>
          Want to just meet for a pint?<i className="fas fa-beer"></i>
        </h4>
        <h4>I'm waiting to hear from you!</h4>
      </header>
    </div>
  );
}

export default SideBar;
