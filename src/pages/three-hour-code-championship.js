import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import ClassroomProcedures from '../components/curriculum/ClassroomProcedures';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';

<meta>Curriculum for the 3-hour code championship event </meta>

export default class ThreeHourCodeChampionship extends React.Component {
  render(){
    return(
      <div>
        <h1>
          3-Hour Code Championship 
        </h1>

        <h4>Description</h4>
        <p>Attention girls and boys, the March Madness of coding has arrived; 
            all the excitement of a tournament packed into one day! Spend the 
            day building out an artificial intelligence computer bot to play 
            head-to-head against your peers! To keep an even playing field, 
            the details of the game are kept secret until the day of the 
            championship. Spend the first hour learning coding fundamentals 
            then, the fun begins when the challenge is released. Create an 
            artificial intelligence computer bot to play head to head against 
            other bots in a tournament. Internet navigation skills (basic 
            typing and mouse control), a passion to work hard and have fun 
            are required. </p>
        
        <h4>Timeline</h4>
        <p>3-hour day for 4th-7th graders</p>

        <h4>Objectives</h4>
        <p>To be able to create a bot using Scratch</p>
        <p>To be able to compete head-to-head against other students using code</p>

        <h4>Terminology</h4>
        <p>Coders - Students enrolled in the class</p>
        <p>Referee/You - Instructor leading the class</p>

        <h4>Basic Structure</h4>
        <p>Each day consists of multiple guided instruction sections where 
            the coach will lead the coders through a Scratch example and then 
            be given time to improve that example and make it their own with 
            the instructor offering assistance and answering questions. On the 
            final day, there is no guided instruction in order to give students 
            time to complete their “Final Project”.</p>

        <h4>Primary Websites</h4>
        <p><a href="https://scratch.mit.edu/">scratch.mit.edu</a></p>
        <p><a href="https://www.codechampionship.com/">www.codechampionship.com</a></p>
        <p><a href="https://app.codechampionship.com/">app.codechampionship.com</a></p>

        <ClassroomChecklist />
        <ClassroomAndHallwayProcedures />

        <h2>Day 1 - 3 Hours </h2>
        <ul>
            <li>Names and coding experience</li>
                <ul><li>Nametags</li>
                <li>Name game</li></ul>
            <li>Rules and coder expectations</li>
            <li>Links for instructor (example bots) </li>
                <ul><li><a href="https://scratch.mit.edu/projects/236400359/#editor">Challenge URL</a>  </li>
                <li>Sample Player 1 URL: <a href="https://scratch.mit.edu/projects/235144179/">https://scratch.mit.edu/projects/235144179/ </a></li>
                <li>Sample Player 2 URL: <a href="https://scratch.mit.edu/projects/234836062/">https://scratch.mit.edu/projects/234836062/ </a></li> </ul>
            <li>Create Scratch Accounts - 5 minutes </li>
            <li>Guided Instruction - Remix base project and create a bot that moves left and down - 5 minutes </li>
            <ul>
                <li>Talk about not changing the blue blocks </li>
                <li>Drag a “Repeat 10” block under the current blocks </li>
                <li>Under “More Blocks” drag a “Move Left” into the “Repeat 10” </li>
                <li>Drag a “Repeat 10” block under the current blocks </li>
                <li>Under “More Blocks” drag a “Move Down” into the “Repeat 10” </li>
                <li>Explain attaching blocks </li>
            </ul>
            <li>Explanation of the Vacuum challenge: There are two bots on the screen at a time. Game Rules:</li>
            <ul>
                <li>You will be disqualified if you don’t follow these rules: </li>
                    <ul>
                        <li>You may not use additional blue blocks or change the existing blue blocks</li>
                        <li>You may change the color, but not the size or shape of your bot. </li>
                        <li>The bot must be visible at all times, and you may not hide it </li>
                        <li>You may not change the background </li>
                        <li>You may not generate other sprites </li>
                    </ul>
                <li>Your bot will not work if: </li>
                    <ul>
                        <li>You do change the name of the sprite. It has to be “Player 1”</li>
                        <li>You are editing “Player 2” </li>
                        <li>Your blocks are not attached </li>
                        <li>You didn’t save (your bot will not update if you do not save) </li>
                    </ul>
            </ul>
            <li>Improvement Time - 60 minutes</li>
            <li>Bio-Break Time - 10 minutes</li>
            <li>Stretches</li>
            <li>Improvement Time - 30 minutes - students may test there bots against others on their computer, or on 
                the projector</li>
            <li>Bracket Challenge - For large class, create a single-elimination bracket. For a small class, every 
                student will play every other student - 45 minutes </li>
                <ul><li>Note: Round robin without keeping score keeps things competitive, but not too competitive. Round robin 
                    with 6 students took 30 minutes.</li></ul>
            <li>Wind down/Sportsmanship time - 15 minutes </li>

         </ul>

    </div>
    )
  }
}