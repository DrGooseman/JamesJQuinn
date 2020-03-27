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
                <li>MERN stack.</li>
                <li>Styled with bootstrap.</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            One of my favorite activities is language learning, so naturally I
            had to create my own language learning web app.
          </p>
          <p>
            Using TopWords, you can select a few different word categories to
            study from. You level up each word after correctly guessing it
            during each round. TopWords uses randomly selected sentences from a
            large sentence list. Currently, only German and Russian are
            available.
          </p>
        </div>
      </div>
      <Jumbotron className="jumbowa2">
        <h1>
          <span>Chat</span>
        </h1>
        <p>
          <span>Chat with your friends!</span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/webapps/chat2.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>MERN stack.</li>
                <li>Socket.io</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            When I found out about socket.io, I decided that I needed to make a
            chat out to test it out. The CSS layout was created while following
            a youtube tutorial (which introduced me to CSS grids). I decided to
            focus more on the functionality than worrying about designing the
            layout for this app since the reason for this app was to learn
            socket.io.
          </p>
          <p>
            My Chat app features instant messaging, as well as picture upload
            and group chats.
          </p>
        </div>
      </div>
      <Jumbotron className="jumbowa3">
        <h1>
          <span>Places</span>
        </h1>
        <p>
          <span>
            Keep track of the places you've been, and compare with friends!
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/webapps/places2.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>MERN stack.</li>
                <li>Google maps API.</li>
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
