import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sheersh Sharma </span>
            from <span className="purple"> UttarPradesh, India.</span>
            <br /> I am a Full Stack Developer with a passion for learning and creating. I have experience in building web applications using technologies like React, Node.js, and MongoDB.
            <br />
            I am currently seeking for a good opportunity to work with a team of talented developers where I can contribute my skills and grow as a developer.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating new designs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sheersh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
