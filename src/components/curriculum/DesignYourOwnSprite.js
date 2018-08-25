import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import "./curriculum.css"; 
// import LessonFive1 from '../components/curriculum/curriculum-images/image1.gif';

<meta></meta>

export default class DesignYourOwnSprite extends React.Component {
  render(){
    return(
      <div>
        <h3>Design Your Own Sprite</h3>
        
        <p>The primary website used for this is <a href="https://www.piskelapp.com/">piskelapp.com.</a></p>
        <p>Note that scratch also has a sprite editor; however, the following are the advantages 
            of piskel: </p>
        <ol>
            <li>Teaches how to import and export sprites</li>
            <li>Makes pixel art, which became hugely popular because of games like minecraft</li>
            <li>Easier to animate and visualize animation with tools like layers and onion skins</li>
        </ol>
        <p>In order to save their work online, they need a gmail. When they did not, I would usually 
            ask parents to login with theirs. They do not have to login to use Piskel, just to save 
            their work. </p>

        <h4>Tutorial:</h4>
        <p>The first task should be to copy a character, if they have one mind, they can do that, 
            if not, they can do one of the ghosts from pacman <a href="https://seeklogo.com/images/P/pacman-ghost-logo-4E0E79293D-seeklogo.com.png">
            here</a>. The pink ghost is a good example because some students may be colorblind, and this 
            seems to have a good difference in contrast. </p>
        {/* <img src={LessonFive1} alt="pacman example" /> */}

    </div>
    )
  }
}