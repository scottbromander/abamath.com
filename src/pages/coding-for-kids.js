import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/layout';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';

// // <meta></meta>

export default () => (
  <Layout>
    <h1>
      Coding For Kids
    </h1>
    <p>
      Have you heard of Code Thinking? It&#39;s the way programmers think!
      Learn code thinking and the basics of programming using blocks like counters,
      loops, functions, and variables. Use your new knowledge to solve puzzles on screen
      with time  away from the screen in fun activities to learn concepts like binary and
      cryptography. Please come knowing how to navigate the internet (basic typing and
      mouse control) and a passion to work hard and have fun!
    </p>

    <h5>Timeline</h5>
    <p>Four 3-hour days for a total of 12 hours of curriculum for 3rd - 6th graders</p>

    <h5>By the end of the class, students will be able to</h5>
    <p>Create code using Loops</p>
    <p>Create code using if statements</p>
    <p>Create code using variables</p>
    <p>Describe computer programming</p>
    <p>Describe what types of problems they can solve with computer science</p>
    <p>Describe what kinds of commands you can give to computers</p>
    <p>Describe binary and why it matters in computer science</p>
    <p>Describe encryption and what it is used for</p>
    <p>Describe compression and what it does to images</p>

    <h5>Terminology</h5>
    <p>Coders - Students enrolled in the class</p>
    <p>Coach/You - Instructor leading the class</p>

    <h5>Basic Structure</h5>
    <p>
      Each day is split up into two, 90-minute blocks. Each of these blocks has its own
      “CS Unplugged” activity where small groups are taken away from their computers to learn
      a computer coding concept. The students not working on one of the CS Unplugged activities
      with the coach work through the “Accelerated Course” on code.org.
    </p>

    <h5>Primary Website</h5>
    <p><OutboundLink href="https://studio.code.org/s/20-hour">code.org</OutboundLink></p>

    <h5>Instructor’s Email:</h5>
    <p>Email: abamathinstructors@gmail.com</p>
    <p>Password: same as Abamath laptops</p>

    <h4> Login Info (Different for Each Student)</h4>
    <p>****************NOTE********************</p>
    <p>
        MAKE ABSOLUTELY SURE THEY SPELL THEIR USERNAME AND EMAIL CORRECTLY!!!
      OTHERWISE THEY WON’T BE ABLE TO LOG IN THE NEXT DAY!!!
    </p>

    <p>Display Name:  [first name][last name]@abamath.com</p>
    <p>Password: [favorite color][favorite number][favorite animal]</p>
    <p>Email: [first name][last name]@abamath.com</p>


    <ClassroomChecklist />

    <ClassroomAndHallwayProcedures />

    {/* <ClassroomProcedures /> */}

    <h2>Day 1</h2>
    <ul>
      <li>Introduction</li>
      <li>Names/Name Tags</li>
      <ul>
        <li>Coding Experience</li>
        <li>Favorite thing to do on the computer</li>
        <li>Rules and coder expectations</li>
      </ul>
      <li>Tell the students that there will be break time and what time it will be</li>
      <li>Students make code.org accounts</li>
      <ul>
        <li>
          Students navigate to
          {' '}
          <OutboundLink href="https://studio.code.org/s/20-hour">https://studio.code.org/s/20-hour</OutboundLink>
          {' '}
          20-hour
        </li>
        <li>
          Recommended with small classes to write down login information as students usually
          have trouble logging in the second day
        </li>
        <li>Do not log any emails or passwords if the student already uses them personally.</li>
      </ul>
      <li>
        Instruction - Go through the
        {' '}
        <OutboundLink href="https://docs.google.com/presentation/d/1NkKWN9IPGGBjeOnghJ0hfmbtEgtLb1zymhPPe8dy9uY/edit#slide=id.p">
          Conditionals presentation
        </OutboundLink>
        {' '}
        with kids
      </li>
      <li>
        Conditionals Competition - Split students into 2 teams. The person at the front of
        the line will pick up a card and show it to the instructor. They will then perform the
        appropriate action based on the card&#39;s conditions. If they are correct, the team gets a
        point. If not, the card goes back in the stack. Continue until all cards are complete.
      </li>
      <ul>
        <li>
          If you don&#39;t have a set of cards, the prompts can be found
          {' '}
          <OutboundLink href="https://docs.google.com/document/d/1cNNHvOfewih6RbbjT5D3-neOkCyi9zRn7BSpZND5zi0/edit">
            here.
          </OutboundLink>
        </li>
      </ul>
      <li>Break Time - 15 minutes</li>
      <ul>
        <li>For morning class: 10:30 AM</li>
        <li>For afternoon class: 2:30 PM</li>
      </ul>
      <li>Computer science fun fact of the day: </li>
      <ul>
        <li>
          Computer science is NOT just programming! Programming is an engineering tool while
          computer science is a broad academic field such as math or physics.
        </li>
      </ul>
      <li>Instruction - Go through the Circles and Angles presentation with kids</li>
      <li><OutboundLink href="https://docs.google.com/presentation/d/1B1kf9pD8e17WMD9dY0ImU7QVVYt7yI6AZ6X7spxblcY/edit#slide=id.g3cb45ddde0_0_50">Circles and Angles Presentation</OutboundLink></li>
      <li>
        Harold the Robot Activity  - Randomly layout a collection of plastic or paper
        cups onto a table.  They can be upright, upside down, side ways, etc. The students must
        use verbal commands to instruct what the ‘robot’ (either the instructor or another student)
        will do to manipulate and stack the cups into a pyramid.  Each student will give
        instructions to the ‘robot’, and students must work together to figure out what
        instructions the ‘robot’ will follow.  The ‘robot’ is free to decide what instructions
        they will follow, the only requirement is that the ‘robot’ is consistent.
        If instructions are too complex or unclear, the ‘robot’ will become confused and
        visibly show this by shaking their head or slumping there head into their hands.
      </li>
      <ul>
        <li>Try making a pyramid of 3 cups first and then move on to bigger pyramids</li>
      </ul>
    </ul>

    <h2>Day 2</h2>
    <ul>
      <li>
        Instruction - Go through the
        {' '}
        <OutboundLink href="https://docs.google.com/presentation/d/1zplh5ugFvlCdqU_UeB4oVgpJxxrDF1hFfFWqC04StLc/edit#slide=id.p">
          Loops presentation with kids
        </OutboundLink>
      </li>
      <li>
        Just Dance loops activity - Begin the activity by reminding students that we see loops
        in real life all the time. Have students break into group of 2/3. One at a time, have the
        students complete one of the Just Dance videos on Youtube. After the song is over, ask each
        student to define a loop they used when dancing. When all students have gone, emphasize the
        difference between repeat loops and conditional loops. For example, in the songs,
        we weren&#39;t counting how many times we did a certain action.
        Instead, we did it UNTIL a condition (ie a change in rhythm) was satisfied.
      </li>
      <ul>
        <li>
          <OutboundLink href="https://www.youtube.com/watch?v=ueqK3xLh46Y">Ghostbusters</OutboundLink>
        </li>
        <li><OutboundLink href="https://www.youtube.com/watch?v=qt4zIG7kUBc">Animals</OutboundLink></li>
        <li>
          <OutboundLink href="https://www.youtube.com/watch?v=_RDbGaQ-1qM">Dynamite</OutboundLink>
        </li>
        <li><OutboundLink href="https://www.youtube.com/watch?v=xHLes2dUuEQ">Rasputin</OutboundLink></li>
        <li><OutboundLink href="https://www.youtube.com/watch?v=71TbpLlB5wU">24K Magic</OutboundLink></li>
        <li><OutboundLink href="https://www.youtube.com/watch?v=9hW5sXowU9Q">Despacito</OutboundLink></li>
        <li><OutboundLink href="https://www.youtube.com/watch?v=Eye-D7U89J4">I Gotta Feeling</OutboundLink></li>
        <li><OutboundLink href="https://www.youtube.com/watch?v=tNUtAzh-C2U">Rockabye</OutboundLink></li>
      </ul>
      <li>Break Time - 15 minutes</li>
      <ul>
        <li>Morning: 10:30 AM</li>
        <li>Afternoon: 2:30 PM</li>
      </ul>
      <li>Stretches</li>
      <li>Computer science fun facts of the day: </li>
      <ul>
        <li>Programming can be done by yourself or in a group</li>
        <li>It’s never too early or too late in your life to start coding </li>
        <li>
          A computer program is a group of instructions or a bunch of lines of code that execute
          a specific task.
          This could be as simple as calculating a few numbers or could be more complex,
          like building Facebook. Websites, games, and apps are all examples of computer programs.
        </li>
      </ul>
      <li>
        Sorting Algorithms - Give the coders eight cards (Ace through 8, out of order). The coders
        take turns asking about two cards. They can ask, “Which card is larger?” or “Are these cards
        in order?” and then the next coder can ask. Here are two methods for comparison:
      </li>
      <ul>
        <li><OutboundLink href="https://www.youtube.com/watch?v=cVMKXKoGu_Y">https://www.youtube.com/watch?v=cVMKXKoGu_Y</OutboundLink></li>
        <li>
          Kids typically figure out the first one (called selection sort).
          But there are faster ways!
          Quick sort is the other one in the video, and that is a faster way to sort a list.
          Keep track of who solves it in the shortest number of questions.
        </li>
      </ul>
      <li>
        Have students at least get through the Farmer 2 levels on code.org.
        Once students finish this set of levels, if students seem to be moving quickly through
        code.org or seem to be getting bored, they seem to like codecombat.com. Have them make
        an account using the same information as their code.org account in order to save progress.
      </li>

    </ul>


    <h2>Day 3</h2>
    <ul>
      <li>Name Tags</li>
      <li>Rules and coder expectations</li>
      <li>Theme: Data Organization</li>
      <li>Daily Vocab:</li>
      <ul>
        <li>Variable: storing a function with a symbolic name</li>
        <li>
          X = 3 example: This means we have stored the number 3 as “X.” So if we typed in 4 + X,
          it would equal 7 because X is 3.
        </li>
        <ul><li>CodeCombat example: enemy = hero.findNearestEnemy()</li></ul>
        <li>Function: type of procedure that a computer recognizes</li>
        <li>Debugging: finding errors in your own code</li>
      </ul>
      <li>
        Instruction: Go through the
        {' '}
        <OutboundLink href="https://docs.google.com/presentation/d/1qzPx6On5yalVOBJpsmvSd3ukTSeqbMw7ohCmeEKpfS8/edit#slide=id.g3cb47cac93_0_146">
          binary presentation
        </OutboundLink>
        {' '}
        with the kids. Tell them there will be a competition
        after break to help them stay focused.

      </li>
      <li>
        Binary Numbers - Each student gets 5 cards (Ace, 2, 4, 8, King - the king is a 16).
        Explain to the students that if a card is face up, it is on, it is a one.
        If it is face down, it is off, it is a zero. With just 5 ones and zeroes,
        let’s see what kind of numbers we can make. Can you make a 4? Can you make a 0?
        What is the largest number you can make with these cards?
      </li>
      <ul>
        <li>
          Easy way to explain binary: to add 1, starting with Ace, keep flipping cards until
          you flip one face-up.
        </li>
      </ul>
      <li>Break Time - 15 minutes</li>
      <ul>
        <li>Morning: 10:30 AM</li>
        <li>Afternoon: 2:30 PM</li>
      </ul>
      <li>Stretches</li>
      <li>Computer science fun fact of the day: </li>
      <ul>
        <li>
          How can you be reasonably confident that nobody will steal your credit card number
          while you are shopping online? (network security, cryptography)
        </li>
      </ul>
      <li>
        Binary Competition: The goal of this activity is to allow students to practice converting
        numbers to binary, with competition as incentive.
      </li>
      <ul>
        <li>
          Method 1 (two instructors, one for each team): Make 2 sets of 15 note cards numbered
          1-15. Split the team up into two lines behind the notecards placed upside-down on two
          chairs. The first person in line writes the number in binary on the board, on another
          sheet, or with the cards. If they get it right, the instructor takes the card. If they
          get it wrong, they have to put the note card back for another student to try. After each
          attempt, the player moves to the back of the line. First team to finish all 15 cards wins.
        </li>
        <li>
          Method 2 (one instructor): If there is only one teacher, rather than checking if the
          answers are correct on the fly, it could make more sense to simply give the students a
          set amount of time and once the time is up the number of correct answers may be counted.
          This has the added benefit that the first team to finish won&#39;t be sitting around
          waiting for the other.
        </li>
        <li>Pro tip: have all the binary conversions written down for a quick way to check </li>
      </ul>
      <li>
        <OutboundLink href="https://docs.google.com/document/d/1j2EvJ-TsbQ4-yGS_NJgEU3NMa1fXYsuLOElTGhjAcBs/edit">
          Binary Go-Fish (optional)
        </OutboundLink>
      </li>
    </ul>
    <h2>Day 4</h2>
    <ul>
      <li>Teach vocabulary for today:</li>
      <ul>
        <li>
          Compression: In order to save data, computers try to make objects on them smaller,
          while still being able to recognize them
        </li>
      </ul>
      <li>
        Word Compression - Coders split into teams of two. One person from each team is given a
        word and told that they must remove 2 letters and write that on a piece of paper.
        If they are successful, give the students a new word and tell them they must remove 3
        letters. See how many letters they can remove from these words.
        The following words are pulled from
        {' '}
        <OutboundLink href="http://www.yougowords.com/10-letters">here</OutboundLink>
        {' '}
      </li>
      <ul>
        <li>
          In computer science, we compress things in order to save more information in a
          smaller space
        </li>
      </ul>
      <li>Break Time - 15 minutes</li>
      <ul>
        <li>Morning: 10:30 AM</li>
        <li>Afternoon: 2:30 PM</li>
      </ul>
      <li>Stretches</li>
      <li>Computer science fun fact of the day: </li>
      <ul>
        <li>
          How can high-quality photos, audio, and video be compressed so much (1/10 to 1/100
          of original size) without losing much quality? (lossy compression algorithms)
        </li>
      </ul>
      <li>
        Making an Algorithm- Students should each be given an algorithm to make a folded paper
        creation. They will have 5 minutes and 1 piece of paper to follow the instructions. All
        algorithms are medium hardness so students will definitely run into at least one point of
        confusion. Have students turn in their creations when done. As a class, discuss how it felt
        reading the instructions and following them when unsure. Reference how confusion can come
        about when certain terms(or variables) are undefined in our algorithm. If students would
        like, they may do another round or try and recreate using the original instructions with
        pictures.
      </li>
      <ul>
        <li>Make sure you have a completed model to compare the attempts to</li>
        <li>Algorithm designs in order: plane, jumping frog, star box</li>
        <li><OutboundLink href="https://docs.google.com/document/d/1PiJCo6AX51vgaKuSR9Yg3H49KlnVu0OXC0tI0VbfIEc/edit#">Worksheet</OutboundLink></li>
      </ul>
      <li>
        <OutboundLink href="https://docs.google.com/document/d/1ZDsL5_Y0kjTp_5Mu_ilYou1X7nMiJm-YHEdnZ7CYq3s/edit">
          ASCII Cryptography Game
        </OutboundLink>
      </li>
      <li>Have students fill out the survey: abamath.com/survey </li>
    </ul>
    <h5>Additional Websites:</h5>
    <p>
      If students are done with code.org, now is the time to introduce them to other websites.
      Introduce them to other sites in this order:
    </p>
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
      <li>
        Blockly Games is very challenging, so introduce it as “A very challenging site for high
        schoolers, but if you’re up for it, go for it!” I have put the blockly games answers
        <OutboundLink href="https://drive.google.com/drive/folders/0B-pA773bPjoLODAzUFkxaDYyNnc"> here</OutboundLink>
      </li>
      <li><OutboundLink href="https://github.com/ummahusla/Codecademy-Exercise-Answers">Code Academy</OutboundLink></li>
    </ul>
  </Layout>
);
