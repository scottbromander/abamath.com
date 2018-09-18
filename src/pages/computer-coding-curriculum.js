import React from "react";
import Layout from "../components/layout"
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';

// // <meta></meta>

export default class ComputerCodersCurriculum extends React.Component {
  render(){
    return(
      <Layout>
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
          <p><OutboundLink href="https://www.codecademy.com/learn/learn-python">codecademy.com</OutboundLink></p>
          <p><OutboundLink href="https://codecombat.com/">codecombat.com</OutboundLink></p>

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
             <OutboundLink href="https://www.marinaratimer.com/"> here.</OutboundLink></p>

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
            <li>Instruction - Go through the <OutboundLink href="https://docs.google.com/presentation/d/1KP3piUel8mFKzNNyCJa_NgwQ0iX_Pk91Mpb2ReZqrUw/edit#slide=id.p"
            >Common Syntax Mistakes presentation</OutboundLink></li>
            <li>Codecombat - For the last 30 minutes of class, give students the option to use codecombat.com 
              instead of lesson if they have completed Python Syntax. For the last 20 minutes, students can 
              switch to codecombat regardless of if they completed the lesson. </li>
            <li><OutboundLink href="https://create.kahoot.it/login?next=%2Fdetails%2Fcomputer-coding-day-1%2F04758971-575f-4a8d-a413-4cff13b79f0f"
            >Kahoot Closer</OutboundLink></li>
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
          <li><OutboundLink href="">Binary Presentation</OutboundLink></li>
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
            <li>Instruction - Go through the <OutboundLink href="https://docs.google.com/presentation/d/1VVYjCRXij0arYBTe7OopCSE5Nxn5v1m73jS7i4aZA5A/edit#slide=id.g3cb95d1046_1_0">
            Variables Presentation</OutboundLink> </li>

          </ul>
        <h2>Day 3</h2>
          <ul>
            <li>Nametags</li>
            <li>Daily Vocab:</li>
              <ul>
                <li>Debugging: identify and remove errors from (computer hardware or software)</li>
                <li>Function: a named section of a program that performs a specific task</li>
              </ul>
            <li>Instruction - Go through the <OutboundLink href="https://docs.google.com/presentation/d/10Ky7SXyWbpe1XTUL9tkdU9xrmbXEtlb1s6p_1hMu2Rk/edit"
            >data types presentation</OutboundLink>. This will cover the difference between ints, floats, Boolean, 
            and strings </li>
            <li>Break</li>
            <li>Stretches</li>
            <li>Computer science fun fact of the day: </li>
              <ul><li>How come it's so easy and enjoyable to simply browse around and get lost for hours 
                on Facebook and other sites? (user interface) </li></ul>
            <li>Instruction - Go through <OutboundLink href="https://docs.google.com/presentation/d/19C-Yu9ak95A8qvH5eWjEGGoKNQ67HDanp9CJps5Ghfc/edit#slide=id.p">
            Presentation for Boolean Logic</OutboundLink></li>
            <li>Make a Picture - Each student is given a sheet of graph paper and instructions on how to 
              create an image on their graph paper. Give students 10 minutes to complete their drawing </li>
              <ul>
                <li>Instructions found <OutboundLink href="https://docs.google.com/document/d/1sQYyZFS5KG1P3HJNo_uBwo-sNMxA0FBYESbKSN-8j18/edit">
                here </OutboundLink>(Algorithm results in order: monkey, camel, elephant, cat)</li>
                <li>When students are done, have them compare the image and the original side by side 
                  and discuss unclear program terms.</li>
                <li>If they would like, students may try with another set of instructions</li>
              </ul>
            <li>Codecombat - For the last 30 minutes of class, give students the option to use 
              codecombat.com instead of lesson if they have completed Functions. Last 20 minutes of 
              use are regardless of lesson completion </li>
            <li><OutboundLink href="https://create.kahoot.it/login?next=%2Fdetails%2Fcomputer-coding-day-3%2F2b17b222-75b7-4968-b072-e1b5777bc751">
            Kahoot Closer </OutboundLink></li>
            <li>Python Lesson Goal for Day: Students should complete Functions. Fast students may 
              finish at A Day at the Supermarket </li>
            <li>JavaScript Lesson Goal for the Day: Functions and Scope. Fast students can begin 
              Modules or Objects. (Modules are in the kahoot for this day, so encourage them to work 
              through that) </li>

              </ul>
        <h2>Day 4</h2>
          <ul>
            <li>Nametags</li>
            <li>Daily Vocabulary:</li>
            <ul>
              <li>List: represents a countable number of ordered values, where the same value may 
                occur more than once </li>
                <ul><li>examples: 1234, sally may bob</li>
                <li>Ask students for examples of when they may use lists</li></ul>
              <li>Dictionary: has a set of keys and each key has a single associated value. 
                When presented with a key, the dictionary will return the associated value</li>
              <li>Tree: simulates a hierarchical tree structure, with a root value and subtrees of 
                children with a parent node</li>
              <li>Sorting: Ordering sequences</li>
                <ul><li>will touch on more with activity after break</li></ul>
            </ul>
            <li>Instruction - Teach Lists and Dictionaries. Be sure to ask students to give examples 
              of when they could be useful and show how we can manipulate them </li>
            <li>Project Check: Check that students have created a project. The projects include 
              Tip Calculator, Python Mad Libs, Area Calculator, Number Guess and Rock, Paper, Scissors. 
              If they have not, help them navigate them to the project corresponding to the lastest 
              lesson they completed </li>
            <li>Boolean Game - Split students into teams. Teams should form a line facing the whiteboard. 
              Display the Boolean Game presentation on the board. The person in front of each line gets 
              a fly swatter. When the question is displayed on the board, the first player to hit the 
              correct answer, scores a point for their team </li>
                <ul><li><OutboundLink href="">Boolean Game Presentation</OutboundLink></li></ul>
            <li>Break</li>
            <li>Stretches</li>
            <li>Computer science fun fact of the day: </li>
              <ul><li>How can you be reasonably confident that nobody will steal your credit card number 
                while you are shopping online? (network security, cryptography) </li></ul>
            <li>Sorting Algorithms - Give the coders eight cards (Ace through 8, out of order). 
              The coders take turns asking about two cards. They can ask, “Which card is larger?” or 
              “Are these cards in order?” and then the next coder can ask. Here are two methods for
               comparison: </li>
               <ul>
                 <li>Best if done in group of 4/5 in a circle fashion. Give students an incentive 
                   (ie break) if they get it in less than 15 turns </li>
                  <li><OutboundLink href="https://www.youtube.com/watch?v=cVMKXKoGu_Y">https://www.youtube.com/watch?v=cVMKXKoGu_Y</OutboundLink></li>
                  <li><OutboundLink href="https://en.wikipedia.org/wiki/Merge_sort">Merge sort: </OutboundLink>First divide the 
                    list into the smallest unit (1 element), then compare 
                    each element with the adjacent list to sort and merge the two adjacent lists. 
                    Finally all the elements are sorted and merged. </li>
                  <li>Bubble sort: repeatedly steps through the list to be sorted, compares each pair 
                    of adjacent items and swaps them if they are in the wrong order </li>
                  <li>Quick sort:</li>
                    <ul>
                      <li> Pick an element, called a pivot, from the array. </li>
                      <li>Partitioning: reorder the array so that all elements with values less than 
                        the pivot come before the pivot, while all elements with values greater than 
                        the pivot come after it (equal values can go either way). After this 
                        partitioning, the pivot is in its final position. This is called the partition 
                        operation.</li>
                      <li>Recursively apply the above steps to the sub-array of elements with smaller 
                        values and separately to the sub-array of elements with greater values.</li>
                    </ul>
                  </ul>
              <li>Codecombat - For the last 30 minutes of class, give students the option to use 
                codecombat.com instead of lesson if they have completed A Day at the Supermarket. 
                Last 20 minutes of use are regardless of lesson completion </li>
              <li><OutboundLink href="https://www.abamath.com/survey">Abamath.com/survey</OutboundLink></li>
              <li><OutboundLink href="https://create.kahoot.it/login?next=%2Fdetails%2Fcomputer-coding-day-4%2Fd7bff191-37ce-42e4-a085-51c5df2fa917">
              Kahoot Closer</OutboundLink></li>
              <li>Python Lesson Goal for the Day: Students should complete A Day at the Supermarket. 
                Fast students may finish in Loops</li>
              <li>JavaScript Lesson Goal for the Day: Arrays and Modules </li>
            </ul>

            <h5>Order of Python Lessons</h5>
            <ol>
              <li>Python Syntax</li>
              <li><em>Tip Calculator</em></li>
              <li>Strings and Console Output</li>
              <li>Date and Time</li>
              <li><em>Python Mad Libs</em></li>
              <li>Conditionals and Control Flow</li>
              <li>PygLatin</li>
              <li><em>Area Calculator</em></li>
              <li>Functions</li>
              <li>Taking a Vacation</li>
              <li><em>Number Guess</em></li>
              <li>Python Lists and Dictionaries</li>
              <li>A Day at the Supermarket</li>
              <li><em>Rock, Paper, Scissors</em></li>
              <li>Lists and Functions</li>
              <li>Battleship</li>
              <li>Loops</li>
              <li>Practice Makes Perfect</li>
              <li><em>Command Line Calendar</em></li>
              <li>Advanced Topics in Python</li>
              <li>Introduction to Bitwise Operators</li>
              <li><em>RGB-HEX Converter</em></li>
              <li>Introduction to Classes</li>
              <li>Classes</li>
              <li><em>Bank Account</em></li>
              <li>File Input/Output</li>
              <li><em>DNA Analysis</em></li>
              <li><em>Final Project</em></li>
              </ol>

              <p><em>*Italics are pro-level lessons</em></p>

              <h5>Additional Websites:</h5>
      <p>If students are done with codecademy, now is the time to introduce them to other websites. 
        Introduce them to other sites in this order:</p>

        <ul>
          <li><OutboundLink href="https://www.playcodemonkey.com/challenges/0">Code monkey</OutboundLink></li>
          <li><OutboundLink href="https://lightbot.com/hocflash.html">Lightbot</OutboundLink></li>
          <li><OutboundLink href="https://codecombat.com/play">Code combat</OutboundLink></li>
          <li><OutboundLink href="https://blockly-games.appspot.com/">Blockly Games</OutboundLink></li>
          <li><OutboundLink href="https://studio.code.org/s/playlab/stage/1/puzzle/10">For students who want something a little more freefrom, code playlab</OutboundLink></li>
          <li><OutboundLink href="https://www.codecademy.com/">Codecademy</OutboundLink></li>
          <li><OutboundLink href="https://www.freecodecamp.com">Free Code Camp </OutboundLink></li>
          <li><OutboundLink href="https://www.codeavengers.com">Codeavengers</OutboundLink></li>
          <li><OutboundLink href="https://www.khanacademy.org/computing/computer-programming ">Khan Academy</OutboundLink></li>
          <li><OutboundLink href="https://www.techrocket.com/">Tech Rocket </OutboundLink></li>
          <li><OutboundLink href="https://www.tynker.com/home/dashboard">Tynker</OutboundLink></li>
        </ul>
      <p>Answers:</p>
      <ul>
        <li><OutboundLink href="https://lightbot.com/LightbotSolns.pdf">Lightbot</OutboundLink></li>
        <li><OutboundLink href="https://gist.github.com/a1ip/2ea627a4bf6067a63634">Code Combat</OutboundLink></li>
          <ul>
            <li>Don’t click the blue circles.</li>    
            <li>Click the red dots to keep going.</li>
          </ul>
        <li>Blockly Games is very challenging, so introduce it as “A very challenging site for high 
          schoolers, but if you’re up for it, go for it!” I have put the blockly games answers 
          <OutboundLink href="https://drive.google.com/drive/folders/0B-pA773bPjoLODAzUFkxaDYyNnc"> here</OutboundLink></li>
        <li><OutboundLink href="https://github.com/ummahusla/Codecademy-Exercise-Answers">Code Academy</OutboundLink></li>
      </ul>
  </Layout>
    )
  }
}