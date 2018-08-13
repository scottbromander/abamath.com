import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import ClassroomProcedures from '../components/curriculum/ClassroomProcedures';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';

<meta></meta>

export default class ComputerCodersCurriculum extends React.Component {
  render(){
    return(
      <div>
        <h1>
          Coding For Kids 
        </h1>
        <p>Ever wanted to learn to code? Here's your chance! Computer Coders will teach you your
             very first programming language. Take your pick of languages that have helped build 
             Facebook, YouTube, Google, and more! Start by learning the basics of syntax and work 
             yourself up to creating projects and games. Time away from the screen in fun, collaborative 
             activities that will teach the basics of concepts like cryptography, binary, 
             and compression.</p>

        <h5>Timeline</h5>
        <p>Four 3-hour days for a total of 12 hours of curriculum for 3rd - 6th graders</p>

        <h5>By the end of the class, students will be able to</h5>
        <p>Create code using functions</p>
        <p>Create code using if statements</p>
        <p>Create code using variables</p>
        <p>Describe computer programming</p>
        <p>Describe what types of problems they can solve with computer science</p>
        <p>Describe what kinds of commands you can give to computers</p>
        <p>Describe binary and why it matters in computer science</p>
        <p>Describe what strings are and why are they useful</p>
        <p>Describe what lists, dictionaries, and trees are</p>
        <p>Describe what boolean values are</p>
        <p>Describe sorting and types of sorting</p>

        <h5>Basic Structure</h5>
        <p>Each day is split up into two, 90-minute blocks. Each of these blocks has its own 
          “CS Unplugged” activity where small groups are taken away from their computers to learn 
          a computer coding concept. The students not working on one of the CS Unplugged activities 
          with the coach work through the Learn Python on codecademy.com. </p>

        <h5>Primary Website</h5>
          <p><a href="https://www.codecademy.com/learn/learn-python">codecademy.com</a></p>
          <p><a href="https://codecombat.com/">codecombat.com</a></p>

        <h5>Instructor’s Email:</h5>
          <p>Email: abamathinstructors@gmail.com</p>
          <p>Password: same as Abamath laptops</p>

        <h4> Login Info (Different for Each Student)</h4>
          <p>****************NOTE********************</p>
          <p>MAKE ABSOLUTELY SURE THEY SPELL THEIR USERNAME AND EMAIL CORRECTLY!!!  
          OTHERWISE THEY WON’T BE ABLE TO LOG IN THE NEXT DAY!!!</p>

          <p>Display Name:  [first name][last name]@abamath.com</p>
          <p>Password: [favorite color][favorite number][favorite animal]</p>
          <p>Email: [first name][last name]@abamath.com</p>


        <ClassroomChecklist /> 

        <ClassroomAndHallwayProcedures />

        <h5>Note:</h5>
        <p>Use Pomodoro Technique in class. A good online timer is found
             <a href="https://www.marinaratimer.com/"> here.</a></p>

        <h2>Day 1</h2>
          <ul>
            <li>Introduction</li>
            <ul>
              <li>Names/Nametags</li>
              <li>Coding Experience</li>
              <li>Favorite thing to do on the computer</li>
              </ul>
            <li>Rules and coder expectations</li>
            <li>Tell the students that there will be break time and what time it will be</li>
            <li>Daily vocab: </li>
                <ul>
                    <li>Variable: storing an element (number, phrase) with a symbolic name </li>
                    <li>Modulo:  finds the remainder after division of one number by another </li>
                    <li>Boolean: system of algebraic notation used to represent logical propositions, 
                        true or false values </li>
                    </ul>
            <li>Students make codecademy accounts</li>
                <ul>
                    <li>Make sure students follow the log-in template above </li>
                    <li>Note: codecademy offers a free 7-day pro trial. Students can start the trial 
                        when they sign up in order to access the pro lesson during the class. These 
                        are listed in italics in the lesson order below the Day outlines. No credit 
                        info required </li>
                    </ul>
            <li>Mars Rover  - Ask for a volunteer to be the Rover. The Rover should close their eyes 
                and stand at the front of the room/hallway. Have other students create a path using 
                their chairs as boundaries. Place 3 objects throughout the course. Taking turns, the
                 student should direct the Rover(whose eyes are still closed) through the obstacles 
                 to retrieve and bring back all the objects. Tell the class that they cannot touch 
                 the Rover or move the 3 objects If there are 2+ instructors, one can be the rover 
                 and the other can moderate. </li>

                 <ul><li>Additional play version: </li>
                 <ul>
                     <li>Have teams of 2. Time each team with the players giving the robot instructions. 
                         1 point per second and 5 for every obstacles encountered </li>
                    <li>Have teams trying to reach specific locations first, or have them try to 
                        obtain objects (ex. markers). First team to reach all the locations/pick up 
                        all the objects win! </li>
                        </ul>
                </ul>


        </ul>


        <h2>Day 2</h2>



        <h2>Day 3</h2>



        <h2>Day 4</h2>
      </div>
    )
  }
}