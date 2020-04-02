import React from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Games() {
  return (
    <div className="main-body">
      <div className="title">
        <h1>My Games</h1>
      </div>
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
      <Jumbotron className="jumbo2">
        <h1>
          <span>Inhumanus</span>
        </h1>
        <p>
          <span>
            Inhumanus is a story-based Sci-Fi singleplayer / co-op (up to 4
            players) virtual reality shooter. Use a variety of guns to survive a
            complex full of aliens, robots, and mutants.
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/games/in.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>Full length campaign.</li>
                <li>Crafted experience and scripted events.</li>
                <li>4 player Co-op gameplay.</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            My first attempt at a full length campaign. Inhumanus was a lot of
            work and took a lot of time, and I learned a lot in the process. At
            the time of release, Inhumanus was one of the VR games with the
            longest play times and largest free-movement worlds (most VR games
            at the time were stationary or rail shooters).
          </p>
          <p>
            A lot of work was also put into bug testing and ensuring a seamless
            co-op experience. During development, I created a mouse/keyboard
            mode just so that I could test co-op by myself, using the
            mouse/keyboard and my VR headset simultaneously.
          </p>
          <p>
            Keeping up performance was also a major challenge since the game
            consisted of much larger levels than any of my others games, as well
            as nicer graphics.
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
                <li>Focus on polish/quality.</li>
                <li>Unified and deliberate theme/aesthetic.</li>
                <li>
                  Focus on what customers wanted, and delivers the best possible
                  version.
                </li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            Many fans of the original Battle Dome kept asking me for a remake, a
            version that focused on the original idea of the first game. Battle
            Dome Redux was my response.
          </p>
          <p>
            Rather than focus on a quick release, I spent much more time
            deliberately crafting a higher quality and more focused experience.
            No short cuts, no cutting corners. All graphical assets, effects,
            and levels had to have a cohesive aesthetic. Because of this, I had
            to create and edit assets myself often in order to have everything
            that I needed. A lot of attention was spent adding good looking and
            satisfying visual and audio effects to all player actions.
          </p>
        </div>
      </div>
      <Jumbotron className="jumbo4">
        <h1>
          <span>PokerTris</span>
        </h1>
        <p>
          <span>
            Playing cards are falling from the heavens, and only you can stop
            them! Land them so that they make poker hands to clear the cards and
            earn points. How many points can you earn before you drown in the
            poker card horror? What a cruel deity...
          </span>
        </p>
      </Jumbotron>
      <div className="game-info">
        <Card>
          <Card.Img variant="top" src="/images/games/poker2.png" />
          <Card.Body>
            <Card.Title>Notable Info</Card.Title>
            <Card.Text>
              <ul>
                <li>My first Android app.</li>
                <li>Made with Java rather than C#.</li>
                <li>My introduction to GIMP.</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Steam Page</Button>
          </Card.Body>
        </Card>
        <div className="game-info-text">
          <p>
            PokerTris was my first Android app. I started working on PokerTris
            shortly after I learning Java in my first year of University (about
            10 or so years ago). In the process, I discovered GIMP and used it
            to create the graphics for the game. Unfortunately, as it was my
            first time working with graphical asset creation, they are a bit
            rough around the edges.
          </p>
          <p>
            I eventually took a break from development to pursue more
            interesting projects. I returned to PokerTris years later to finish
            and publish it on Google Play.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Games;
