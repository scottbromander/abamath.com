import React from "react";
import { Link } from "gatsby";
import './about.css';

// <meta>About page describing who Abamath is as a company, what we do, and how to get involved.</meta>

export default class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h2>
          FAQ
        </h2>
        <h3 className="item">
          Who are you?
        </h3>
        <p className="item">
          We are a group of highly energetic software developers, college
          students, and engineers passionate about fostering the next
          generation of problem solvers to be the super heroes of tomorrow.
        </p>
        <h3 className="item">
          What do you do?
        </h3>
        <p className="item">
          We do for coding what little league does for baseball.
          We run epic coding, video game, and website design classes through partnerships
          with community education programs in Minnesota with all of
          the excitement of a sport.
        </p>
        <h3 className="item">
          I love working with kids and STEM! Can I help you?
        </h3>
        <p className="item">
          Probably! Even when we don't have openings, we're always
          looking to get in touch with potential future instructors for
          our coding classes! Tell us about yourself on our <Link to="./application/">application</Link>!
        </p>
        <h3 className="item">
          Why aren't you in my town yet?
        </h3>
        <p className="item">
          We had to start somewhere. We're from the southwest metro,
          so we started there. We're currently expanding like crazy
          in Minnesota. If you want us in your town, get in touch and
          let us know!
        </p>
      </div>
    )
  }
}