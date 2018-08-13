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
          Computer Coders 
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

        <h2>Day 1 - Intro to Coding</h2>
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

            <li>Break </li>
            <li>Stretches</li>
            <li>Computer science fun fact of the day: </li>
              <ul><li>Computer science is NOT just programming! Programming is an engineering tool 
                while computer science is a broad academic field such as math or physics. </li></ul>
            <li>Instruction - Go through the <a href="https://docs.google.com/presentation/d/1KP3piUel8mFKzNNyCJa_NgwQ0iX_Pk91Mpb2ReZqrUw/edit#slide=id.p"
            >Common Syntax Mistakes presentation</a></li>
            <li>Codecombat - For the last 30 minutes of class, give students the option to use codecombat.com 
              instead of lesson if they have completed Python Syntax. For the last 20 minutes, students can 
              switch to codecombat regardless of if they completed the lesson. </li>
            <li><a href="https://create.kahoot.it/login?next=%2Fdetails%2Fcomputer-coding-day-1%2F04758971-575f-4a8d-a413-4cff13b79f0f"
            >Kahoot Closer</a></li>
            <li>Lesson Goal for Day: Students should complete Python Syntax lesson. Fast students may 
              complete through Conditionals</li>
            <li>JavaScript Lesson Goal for the Day: Introduction and Variables </li>
        </ul>


        <h2>Day 2 - Binary, Strings, and Conditionals</h2>

        <ul>
          <li>Nametags</li>
          <li>Daily Vocabulary: </li>
            <ul>
              <li>Conditionals (“If-else statement”) </li>
              <li>Binary: the most simple language of computers </li>
                <ul><li>all 1’s and 0’s</li>
                  <li>Explain in more detail later during game </li></ul>
              <li>String: content in quotation marks</li>
                <ul><li>How we communicate text in coding</li>
                  <li>Useful for output control</li></ul>
            </ul>
          <li>Instruction - Go through examples of binary numbers on the board. Explain what the 
            0s and 1s mean and how the bits are weighted.If students are interested, you can also 
            explain adding/subtracting in binary</li>
          <li><a href="">Binary Presentation</a></li>
          <li>Binary Numbers - Make 2 sets of 15 note cards numbered 1-15. Split the team up into 
            two lines behind the notecards placed upside-down on two chairs. The first person in 
            line writes the number in binary on the board, on another sheet, or with the cards. 
            If they get it right, the instructor takes the card. If they get it wrong, they have 
            to put the note card back for another student to try. After each guess, the player 
            moves to the back of the line. First team to finish all 15 cards wins. (works best 
            with 2 instructors, one for each team) </li>
              <ul><li>Pro tip: have all the binary conversions written down for a quick way to check </li></ul>
          <li>Break</li>
          <li>Stretches</li>
          <li>Computer science fun fact of the day: </li>
              <ul>
                <li>Learning computer programming is similar to learning a new language </li>
                <li>Just like there are many languages spoken and written in the world, there are 
                  many different computer languages. </li>
                <li>Different programming languages do different things. For example, to build a 
                  website you might use the languages Python, HTML, CSS or JavaScript. For a 
                  mobile app, you might use Java or Objective C. For video games, you might use 
                  C++. The language that is selected depends on what you are trying to create 
                  and what you are trying to get the computer to do. </li>
              </ul>
            <li>Instruction - Go through the <a href="https://docs.google.com/presentation/d/1VVYjCRXij0arYBTe7OopCSE5Nxn5v1m73jS7i4aZA5A/edit#slide=id.g3cb95d1046_1_0">
            Variables Presentation</a> </li>




          </ul>
        <h2>Day 3</h2>



        <h2>Day 4</h2>
      </div>
    )
  }
}