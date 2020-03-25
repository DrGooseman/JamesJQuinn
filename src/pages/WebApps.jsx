import React from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function WebApps() {
  return (
    <div className="main-body">
      <div className="title">
        <h1>WebApps</h1>
      </div>
      <Jumbotron className="jumbowa1">
        <h1>
          <span>TopWords</span>
        </h1>
        <p>
          <span>
            Learn/practice the most commonly used words in a flash card style
            format.
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/webapps/tw2.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>Quick release.</li>
                <li>New experimental VR features.</li>
                <li>My first Unity & multiplayer game.</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            My first real PC game. I started working on Battle Dome very shortly
            after the first VR headsets were released. Developed very quickly in
            order to capitalize on the virtual reality market's need for a PvP
            shooter, I released Battle Dome about a month and a half later.
          </p>
          <p>
            Battle Dome was an instant success. Afterwards, I decided to leave
            my IT job at Northstar Travel Group and focus on developing Battle
            Dome. I spent the next year improving the game and adding new
            features and game modes. My focus was to push the boundaries of VR
            and create new features that were not yet available in other VR
            games.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebApps;
