import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <div className="main-body">
      <div className="title">
        <h1>About Me</h1>
      </div>
      <div className="about-me">
        <h2>Hello!</h2>
        <h1>I'm James</h1>
        <div className="about-me-who-am-i">
          <div className="about-me-who-am-i-div">
            <h2>Who am I?</h2>
            <p>
              A developer who is passionate about programming, creating things,
              learning, new experiences, and all things computer related.
            </p>
            <br></br>
            <br></br>
            <h2>My goal</h2>
            <p>
              To make a difference in the world, to further develop myself in
              every way possible, and to find an amazing company/team to share
              this journey with. A company I would be proud to work with and to
              call my family.
            </p>
          </div>
          <img src="/images/profpic2.jpg" alt="profpic2"></img>
        </div>
      </div>
      <div className="title">
        <h1>My Journey</h1>
      </div>
      <div className="my-skills">
        {/* <h1>My Journey</h1> */}
        <div className="my-skills-row">
          <img
            className="my-skills-img-left"
            src="https://image.flaticon.com/icons/svg/1197/1197511.svg"
            alt="programming-img"
          />
          <div className="my-skills-row-text">
            <h3>Development & Game Design</h3>
            <p>
              I started learning to program when I was 15 years old. Utilizing
              Google and motivated by my desire to create my own games, I taught
              myself how to develop flash games (and how to monetize those
              games). I have been programming ever since.
            </p>
          </div>
        </div>
        <div className="my-skills-row">
          <div className="my-skills-row-text">
            <h3>IT & Computer Repair</h3>
            <p>
              Because of my interest in computers and my curiousity, I have
              always found myself fixing others' computers. As a way to earn
              money, I decided to utilize this talent by being a freelance IT
              tech. Eventually, I opened my own computer repair shop,
              "Generation Tech". A year later, someone purchased my brand/shop
              from me and I went on to become an IT tech at a large company,
              getting the chance to work with a great, friendly team of seasoned
              IT vets who taught me the ins and outs of corporate IT.
            </p>
          </div>
          <img
            className="my-skills-img-right"
            src="https://image.flaticon.com/icons/svg/1969/1969986.svg"
            alt="virtual-reality-img"
          />
        </div>
        <div className="my-skills-row">
          <img
            className="my-skills-img-left"
            src="https://image.flaticon.com/icons/svg/2177/2177275.svg"
            alt="virtual-reality-img"
          />
          <div className="my-skills-row-text">
            <h3>Virtual Reality</h3>
            <p>
              In 2017, I got my hands on my first virtual reality headset. I was
              blown away! That's when I knew that I had to create a virtual
              reality game. A month and a half later, I released my first VR
              game "Battle Dome" which was a big hit. This is when I realized
              that it was destiny to be a programmer, not an IT tech. Since
              then, I have released 2 more games (with more on the way). Being a
              lone indie dev has made me self sufficient and well rounded,
              having to do almost every aspect of game production myself.
              Although I enjoy making games and have learned a lot, I miss
              working as a team and having coworkers to share the development
              experience with.
            </p>
          </div>
        </div>
        <div className="my-skills-row">
          <div className="my-skills-row-text">
            <h3>Web Development</h3>
            <p>
              Recently, I decided to dive into the world of web development.
              Even though I already learned HTML, CSS, JS, and SQL years ago, I
              realized that web development has evolved so much since then. Now
              I spend every day getting my hands dirty with various web
              technologies including React, Node.js, MongoDB, and more. It is
              now my goal to master web development and achieve my dream of
              working as a developer in an amazing team.
            </p>
          </div>{" "}
          <img
            className="my-skills-img-right"
            src="https://image.flaticon.com/icons/svg/524/524541.svg"
            alt="programming-img"
          />
        </div>
      </div>{" "}
      <div className="title">
        <h1>My Interests</h1>
      </div>
      <div className="my-interests">
        <div className="my-interests-lists ">
          <ul>
            <li>Programming (obviously)</li>
            <li>Learning foreign languages</li>
            <li>Cooking</li>
            <li>Motorcycles</li>
            <li>Cycling</li>
            <li>Teaching</li>
            <li>Playing sports / exercise</li>
          </ul>
          <ul>
            <li>Playing music</li>
            <li>Beer tasting</li>
            <li>Singing drinking songs</li>
            <li>Traveling and exploring</li>
            <li>Shooting (guns/bows)</li>
            <li>Games and virtual reality</li>
            <li>Relaxing with family/friends</li>
          </ul>
        </div>
      </div>
      <div className="title">
        <h1>A Glimpse into my life</h1>
      </div>
      <div className="my-skills">
        <Carousel interval="10000000">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/gentech2.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Opening Generation Tech</h3>
              <p>
                Not only did I have to fix computers, but I also had to create
                the brand and marketing materials, as well as handle all
                financial and business related duties.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/gentech.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Always happy to help</h3>
              <p>
                Friendly and honest customer interaction was a huge part of the
                job.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/gentech3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>I love to fix things</h3>
              <p>
                There is nothing more satisfying than diagnosing and solving a
                problem (or bug).
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/circuit.jpg"
              alt="Forth slide"
            />

            <Carousel.Caption>
              <h3>Learning new things</h3>
              <p>
                I used my downtime at Northstar Travel Group to learn about
                microcontrollers and circuits. This was my first creation. This
                skill gave me the ability to repair boards myself (for example,
                replacing a blown capacitor).
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/pumpkin.jpg"
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h3>Taking it to the next level</h3>
              <p>
                The company soon had a halloween pumpkin painting contest to
                raise money for charities. I created a motion detecting pumpkin
                that would flash its eyes when someone would walk in front of
                it. I wanted the pumpkin to also turn towards the victim, but
                the small motor I had couldn't support the weight of the
                pumpkin. I'll buy a bigger motor next time!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/accordion.jpg"
              alt="Sixth slide"
            />

            <Carousel.Caption>
              <h3>Love for music</h3>
              <p>
                Playing music and learning new instruments is one of my favorite
                hobbies. My most recent instrument was the accordion. Next, I
                would like to learn the violin and the bag pipes.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/guinness.jpg"
              alt="Seventh slide"
            />

            <Carousel.Caption>
              <h3>Cheers!</h3>
              <p>
                There's nothing like enjoying a well deserved pint after an
                honest day's work.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
