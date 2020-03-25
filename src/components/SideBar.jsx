import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="App-header-fixed-parent">
      <header className="App-header">
        <img src={"/images/profpic.jpg"} alt="profile pic" />
        <h3>James Quinn</h3>
        <p>
          <i class="far fa-envelope"></i> JamesJQuinn12@gmail.com
        </p>

        <h4>American programmer living in Moscow.</h4>
        <h4>Aspiring full-stack developer.</h4>
        <h4>Experienced in game dev / virtual reality.</h4>
        <h4></h4>

        <h4></h4>

        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto flex-column">
            <Nav.Link as={NavLink} to={"/"}>
              About Me
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/webapps"}>
              Web Apps
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/games"}>
              Games
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/games"}>
              Work Experience
            </Nav.Link>
          </Nav>
        </Navbar>
        <h4></h4>

        <h4></h4>
        {/* <NavLink to={`/`}>Dashboard</NavLink>
<NavLink to={`/poop`}>Dashboard</NavLink> */}
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-xing-square"></i>
        <i class="fab fa-hackerrank"></i>
        {/* <img className="icon" src="/images/hh.ico" alt="hh" /> */}
        <h4></h4>

        <h4></h4>
        <h4>
          Want to see this smiling face working at your company?
          <i class="fas fa-smile"></i>
        </h4>
        <h4>
          Want to get together and program?<i class="fas fa-code"></i>
        </h4>
        <h4>
          Want to just meet for a pint?<i class="fas fa-beer"></i>
        </h4>
        <h4>I'm waiting to hear from you!</h4>
      </header>
    </div>
  );
}

export default SideBar;
