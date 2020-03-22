import React from "react";

function Home() {
  return (
    <div className="main-body">
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
              To futher develop myself in every way possible, and to find an
              amazing company/team to share this journey with. A company I would
              be proud to work with and to call my family.
            </p>
          </div>
          <img src="/images/profpic2.jpg" alt="profpic2"></img>
        </div>{" "}
      </div>
      <div className="my-skills">
        <div className="my-skills-row">
          <img
            src="https://image.flaticon.com/icons/svg/1197/1197511.svg"
            alt="programming-img"
          />
          <div className="my-skills-row-text">
            <h3>Design & Development</h3>
            <p>
              I started learning to program when I was 15 years old. Utilizing
              Google and motivated by my desire to create games, I taught myself
              how to create flash games (and how to make money with those
              games). I have been programming ever since.
            </p>
          </div>
        </div>
        <div className="my-skills-row">
          <div className="my-skills-row-text">
            <h3>Virtual Reality</h3>
            <p>
              In 2017, I got my hands on my first virtual reality headset. I was
              blown away! That's when I knew that I had to create a virtual
              reality game. A month and a half later, I released my first VR
              game "Battle Dome", which was a big hit. Since then, I have
              released 2 more (with more on the way!)
            </p>
          </div>
          <img
            src="https://image.flaticon.com/icons/svg/2177/2177275.svg"
            alt="virtual-reality-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
