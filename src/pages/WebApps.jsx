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
                <li>Hosted on Firebase + Heroku</li>
              </ul>
            </Card.Text>
            <a
              href="https://topwordsapp.com/"
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Site</Button>
            </a>
            <a
              href="https://github.com/DrGooseman/MERN-Words-Frontend"
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">GitHub</Button>
            </a>
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
            during each round. You can also flag difficult words for review.
            TopWords uses randomly selected sentences from a large sentence
            list. Currently, only German and Russian are available.
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
                <li>Hosted on Firebase + Heroku</li>
                <li>Images hosted on AWS S3</li>
              </ul>
            </Card.Text>
            <a
              href="https://chat-bbs.firebaseapp.com/"
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Site</Button>
            </a>
            <a
              href="https://github.com/DrGooseman/MERN-Chat-Frontend"
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">GitHub</Button>
            </a>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            When I found out about socket.io, I decided that I needed to make a
            chat app to test it out. The CSS layout was created while following
            a youtube tutorial (which introduced me to CSS grids). I decided to
            focus more on the functionality rather than worrying about designing
            the layout for this app since the reason for this app was to learn
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
                <li>Hosted on Firebase + Heroku</li>
                <li>Images hosted on AWS S3</li>
              </ul>
            </Card.Text>
            <a
              href="https://places-bbs.firebaseapp.com/"
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Site</Button>
            </a>
            <a
              href="https://github.com/DrGooseman/MERN-Places"
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">GitHub</Button>
            </a>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            I created this app alongside a MERN stack tutorial. Most of the
            functionality and design was created alongside the tutorial, but I
            decided to make a few changes and add some extra features.
          </p>
          <p>
            For example, I thought it would be cool to have a map page where you
            can see all of your and your friends' locations on a map of the
            world. You can click each point and see more info about the spot.
            Also, I added the ability to change the picture on the "edit places"
            page.
          </p>
        </div>
      </div>
      <Jumbotron className="jumbowa4">
        <h1>
          <span>Battle Blocks</span>
        </h1>
        <p>
          <span>
            Outwit your friends in this simplistic turn-based strategy game.
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/webapps/blocks.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>MERN stack.</li>
                <li>Socket.io</li>
                <li>Hosted on Firebase + Heroku</li>
                <li>Images hosted on AWS S3</li>
              </ul>
            </Card.Text>
            <a
              href=""
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" disabled>
                Site (coming soon)
              </Button>
            </a>
            <a
              href="https://github.com/DrGooseman/MERN-BattleBlocks"
              className="side-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">GitHub</Button>
            </a>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            Battle Blocks is a recreation of an old Android app I created (but
            never published) years ago. After learning about Socket.io, I knew
            that I needed to create a game with it, and I figured my old Battle
            Blocks was the perfect choice.
          </p>
          <p>
            I used the CSS grid system to organize the game board. I plan on
            adding animation to the game (for example, when your blocks attack
            another block) and making the game more visually appealing in
            general. I already added support for animation into the backend data
            model (previous game state is stored so it can be sent to the client
            and the previous move can be recreated when a game is reopened).
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebApps;
