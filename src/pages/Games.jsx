import React from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function Games() {
  return (
    <div className="main-body">
      <h1>My Games</h1>
      <Jumbotron className="jumbo1">
        <h1>
          <span>Battle Dome</span>
        </h1>
        <p>
          <span>
            Have a virtual shootout with other players! Work by yourself or with
            teammates to achieve victory. Will you survive the Battle Dome?
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/games/bd.jpg" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>Quick release.</li>
                <li>New experimental VR features</li>
                <li>My first Unity & multiplayer game</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div>
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
      <Jumbotron className="jumbo2">
        <h1>
          <span>Battle Dome Redux</span>
        </h1>
        <p>
          <span>
            Battle Dome is back, and better than ever! Battle Dome Redux focuses
            on the original game play elements of Battle Dome, refining and
            improving upon every aspect to give you the best Battle Dome
            experience. Battle Dome Redux is a 5 v 5 competitive Sci-Fi VR
            shooter.
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/games/bdr2.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>Focus on polish/quality</li>
                <li>Unified and deliberate theme/aesthetic</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div>
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
      <Jumbotron className="jumbo3">
        <h1>
          <span>Battle Dome Redux</span>
        </h1>
        <p>
          <span>
            Battle Dome is back, and better than ever! Battle Dome Redux focuses
            on the original game play elements of Battle Dome, refining and
            improving upon every aspect to give you the best Battle Dome
            experience. Battle Dome Redux is a 5 v 5 competitive Sci-Fi VR
            shooter.
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/games/bdr2.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>Focus on polish/quality</li>
                <li>Unified and deliberate theme/aesthetic</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div>
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

export default Games;
