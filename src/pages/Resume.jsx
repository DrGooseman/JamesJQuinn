import React from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <div className="main-body">
      <div className="title">
        <h1>Resume</h1>
      </div>
      <div className="resume-header">
        <h1>James Joseph Quinn</h1>
        <h3>Moscow, Russia</h3>
        <h3>
          <i class="far fa-envelope"></i> jamesjquinn12@gmail.com
        </h3>
        <h3>
          <i class="fas fa-phone-square-alt"></i> +7 985 131 5190
        </h3>
        <h3>
          <i class="fab fa-whatsapp"></i>
          +1 267 614 0533
        </h3>
      </div>
      <div className="resume-title">
        <i class="fas fa-graduation-cap"></i> Education
      </div>
      <div className="resume-row">
        <div className="resume-date">
          <h5>August 2009-</h5>
          <h5>May 2012</h5>
        </div>
        <div>
          <h4>Shippensburg University</h4>
          <p>Computer Science Major, concentration in Software Engineering.</p>
        </div>
      </div>
      <div className="resume-row">
        <div className="resume-date">
          <h5>September 2014 -</h5>
          <h5>August 2015</h5>
        </div>
        <div>
          <h4>Western Governors University</h4>
          <p>B.S Information Technology</p>
        </div>
      </div>
      <div className="resume-title">
        <i class="fas fa-briefcase"></i> Work Experience
      </div>
      <div className="resume-row">
        <div className="resume-date">
          <h5>May 2016 –</h5>
          <h5>Present</h5>
        </div>
        <div>
          <h4>Bad Bird Studios (Self Employed)</h4>
          <p>Virtual Reality Game Developer</p>
          <ul>
            <li>
              Design, program, and market virtual reality computer games
              (Unity3D).
            </li>
            <li>Creation of graphical assets / SFX / 3D models when needed.</li>
            <li>
              Work with the community to receive feedback and diagnose/fix bugs.
            </li>
            <li>
              3 PC games published on Steam (C#), 1 android game on Google Play
              (Java).
            </li>
            <li>4th PC game in development.</li>
          </ul>
        </div>
      </div>
      <div className="resume-row">
        <div className="resume-date">
          <h5>September 2015 -</h5>
          <h5>July 2016</h5>
        </div>
        <div>
          <h4>Northstar Travel Group</h4>
          <p>Help Desk Associate</p>
          <ul>
            <li>
              Setup, maintain, diagnose, and repair computers and user accounts.
            </li>
            <li>Provide IT support in person and remotely.</li>
            <li>Provide computer and software training.</li>
            <li>
              Reverse engineered the old ticketing system to add new
              functionality.
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-row">
        <div className="resume-date">
          <h5>January 2014 -</h5>
          <h5>January 2015</h5>
        </div>
        <div>
          <h4>Generation Tech LLC (Self Employed)</h4>
          <p>Owner/Operator</p>
          <ul>
            <li>
              Manage all aspects of running a computer repair business including
              marketing, book keeping, customer relations, ordering parts and
              products, and managing an employee.
            </li>
            <li>
              Troubleshoot and repair computers and networks for personal and
              small business clients while emphasizing quality, honesty, and a
              quick turn around.
            </li>
            <li>
              Install and maintain safe and reliable networks on customer
              premises.
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-row">
        <div className="resume-date">
          <h5>January 2012 –</h5>
          <h5>January 2014</h5>
        </div>
        <div>
          <h4>New Hope Dentists LLC</h4>
          <p>On Call IT Support</p>
          <ul>
            <li>Offer technical support both in person and over the phone.</li>
            <li>Resolve computer hardware and software issues.</li>
            <li>
              Install and maintain new dental technology hardware and software.
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-row">
        <div className="resume-date">
          <h5>January 2012 –</h5>
          <h5>May 2012</h5>
        </div>
        <div>
          <h4>Shippensburg University Residence Life</h4>
          <p>Resident Assistant - Harley Hall</p>
          <ul>
            <li>
              Responsible for social, academic, and emotional growth of my
              residents.
            </li>
            <li>
              Plan and execute events for residents both independently and in a
              team.
            </li>
            <li>Create a welcoming and safe community environment.</li>
            <li>Enforce policies set by the university.</li>
          </ul>
        </div>
      </div>
      <div className="resume-title">
        <i class="fas fa-info-circle"></i> Additional Information
      </div>
      <div className="resume-row-info">
        <div>
          <ul>
            <li>
              10+ years of experience creating games (PC, virtual reality,
              android, flash).
            </li>
            <li>
              Experienced with C# (Unity3D), Java, HTML, CSS, Javascript, React,
              Node.js, MongoDB (MERN stack), SQL, and ActionScript.
            </li>
            <li>
              Experienced with GIMP, Audacity, Github, and Microsoft Office /
              Google Docs.
            </li>
            <li>
              Previous member of Shippensburg University Competitive Programming
              Team.
            </li>
            <li>Native English, B1 Russian, A2 German language.</li>
          </ul>
        </div>
      </div>

      <div className="resume-title">
        <i class="fas fa-star"></i> Certifications
      </div>
      <div className="resume-row-certs">
        <ul>
          <li>CompTIA A+</li>
          <li>CompTIA Network+</li>
          <li>CompTIA Security+</li>
          <li>CompTIA Project+</li>
        </ul>
        <ul>
          <li>CompTIA Linux+</li>
          <li>CIW Web Foundations</li>
          <li>CIW Web Design Specialist</li>
          <li>CIW JavaScript Specialist</li>
        </ul>
        <ul>
          <li>SUSE Certified Linux Administrator</li>
          <li>LPI Linux Server Professional</li>{" "}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
