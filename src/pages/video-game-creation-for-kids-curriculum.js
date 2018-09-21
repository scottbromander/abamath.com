import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/layout';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';
import DesignYourOwnSprite from '../components/curriculum/DesignYourOwnSprite';
import videogame11 from '../components/curriculum/curriculum-images/videogame11.png';
import videogame12 from '../components/curriculum/curriculum-images/videogame12.png';
import videogame21 from '../components/curriculum/curriculum-images/videogame21.png';
import videogame22 from '../components/curriculum/curriculum-images/videogame22.png';
import videogame31 from '../components/curriculum/curriculum-images/videogame31.png';
import videogame32 from '../components/curriculum/curriculum-images/videogame32.png';
import videogame33 from '../components/curriculum/curriculum-images/videogame33.png';
import videogame34 from '../components/curriculum/curriculum-images/videogame34.png';
import videogame41 from '../components/curriculum/curriculum-images/videogame41.png';
import videogame42 from '../components/curriculum/curriculum-images/videogame42.png';

// // <meta>Video Game Creation for Kids Camp curriculum</meta>

export default () => (
  <Layout>
    <h1>
      2018 Video Game Creation for Kids Camp Lesson Plan
    </h1>
    <p>
      Make your own video game! From Pong to Maze games, you&#39;ll learn to code then
      put those skills to use. Using an MIT built platform, you&#39;ll create your custom
      online game to share with friends and family. Please come knowing how to navigate the
      internet (basic typing and mouse control) and a passion to work hard and have fun!
    </p>

    <h5>Timeline</h5>
    <p>Four 3-hour days for a total of 12 hours of curriculum for 3rd - 6th graders</p>

    <h5>Objectives</h5>
    <p>To be able to create a video game using Scratch</p>
    <p>To be able to describe “Flow” and the impact it has in a game</p>
    <p>To be able to describe “Game balancing” and why it matters in a game</p>
    <p>
      To be able to define what a video game is: A video game is an electronic game that
      involves player interaction.
    </p>


    <h5>Basic Structure</h5>
    <p>
      Each day consists of multiple guided instruction sections where the coach will lead the
      coders through a Scratch example and then be given time to improve that example and make
      it their own with the instructor offering assistance and answering questions. On the
      final day, there is no guided instruction in order to give students time to complete
      their “Final Project”.
    </p>

    <h5>Primary Website</h5>
    <p><OutboundLink href="https://scratch.mit.edu/">Scratch.mit.edu </OutboundLink></p>

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

    <h5>Note:</h5>
    <p>
      Use Pomodoro Technique in class. A good online timer is found
      <OutboundLink href="https://www.marinaratimer.com/"> here.</OutboundLink>
    </p>

    <p>
      Lessons
      {' '}
      <OutboundLink href="https://docs.google.com/document/d/19YHoFghCECKPhzRyj6st0liT15j9Ipdy3gWy1a25Klg/edit">
        Here
      </OutboundLink>
    </p>
    <p><OutboundLink href="https://scratch.mit.edu/projects/238743123/">Final Scratch Project</OutboundLink></p>

    <h2>Day 1</h2>
    <ul>
      <li>Introduction</li>
      <ul>
        <li>Name</li>
        <li>Coding experience</li>
        <li>Favorite video game</li>
      </ul>
      <li>Welcome Presentation</li>
      <li>Brainstorm - 30 min </li>
      <li>Make Scratch Accounts</li>
      <li>Have Students create a new project - This is their in class project</li>
      <li>
        Show them the final in-class project
        {' '}
        <OutboundLink href="https://scratch.mit.edu/projects/237424436/">
          here
        </OutboundLink>
      </li>
      <li>Break</li>
      <li>Stretches</li>
      <li>Computer science fun fact of the day: </li>
      <ul>
        <li>
          How come modern games look so rad, with all of their cool 3-D effects, and
          how can it all be rendered in real-time as you are playing and constantly
          changing the in-game environment? (computer graphics)
        </li>
      </ul>
      <li>Lesson 1 - Intro to Scratch</li>
      <ul>
        <li>Create new project, and name it! </li>
        <li>
          Show where the duplicate, delete, grow, and shrink buttons are, then delete
          the default sprite (cat).
        </li>
        <li>Next, add a sprite, then a background!</li>
        <li>We first need to initialize the stage.</li>
        <ul>
          <li>Initialization is the term for giving a variable a starting value.</li>
          <li>
            This is important because when we start a game we don’t always know
            what a certain variable is set to, so this allows up to reset it to
            the proper value.
          </li>
          <li>
            You may remember that last time we created a moving character, but
            there was no way to “restart” the game. This will allow us to do that.
          </li>
          <li>
            Describe how the Green Flag button will be our restart button. It will
            run the code below when you start the game.
          </li>
          <li>
            Try having the students drag their character away from their starting
            spot and see how each time the program is reset with the flag they are
            returned to the proper location.
          </li>
        </ul>
        <img src={videogame11} alt="initialize character" />
        <li>Show the different Event blocks and Motion blocks.</li>
        <img src={videogame12} alt="shows motion blocks" height="400" />
        <li>Improvement Time</li>
        <ul>
          <li>
            Challenge #1: Use the arrow keys to make your sprite move.
            Hint: Use change x and y blocks.
          </li>
          <li>Challenge #2: Create another sprite, and make it start in random places.</li>
        </ul>
      </ul>
      <li>Final Game Work Time</li>
    </ul>

    <h2>Day 2</h2>
    <ul>
      <li>Intro</li>
      <li>
        Explanation of flow: A video game is not fun if it is too easy. A video game is not
        fun if it is too hard. Video game “Flow” is all about making the game fun by
        making it just hard enough to keep it challenging.
      </li>
      <li>Conditionals Activity - Pick 1 (or more?) </li>
      <ul>
        <li>
          Conditionals Competition - Split students into 2 teams. The person at the
          front of the line will pick up a card and show it to the instructor. They
          will then perform the appropriate action based on the card&#39;s conditions. If they
          are correct, the team gets a point. If not, the card goes back in the stack.
          Continue until all cards are complete.
        </li>
        <ul>
          <li>
            If you don&#39;t have a set of cards, the prompts can be found
            {' '}
            <OutboundLink href="https://docs.google.com/document/d/1cNNHvOfewih6RbbjT5D3-neOkCyi9zRn7BSpZND5zi0/edit">
              here.
            </OutboundLink>
          </li>
          <li>
            Alternative Way to Play: Say the cards and play a “Simon says”
            game of sorts. No one needs to get eliminated, but you can
            still call them out if they get it wrong.
          </li>
        </ul>
        <li>Conditionals Chain Game </li>
        <ul>
          <li>Have students get into a circle</li>
          <li>Explain the game as a story of chained events. Here is an example: </li>
          <ul>
            <li>“If I go out tonight… I will go to the movie.”</li>
            <li>
              “If I go to the movie… I will see Charlie and the Chocolate factory.”
            </li>
            <li>
              “If I see Charlie and the Chocolate Factory… I will eat lots of chocolate.”
            </li>
            <li>“If I eat lots of chocolate… I will gain weight.” </li>
            <li>“If I gain weight… I will have to go to the gym more.” </li>
            <li>Etc. </li>
          </ul>
          <li>
            Start the game with an if statement (If I drink coffee…) and the
            person on your right has to finish it (...then I will stay up
            tonight). Then that person starts the next statement with the
            statement they just created (If I stay up tonight…). Continue in
            the circle until the story seems to be dying down or when excitement
            diminishes. You can start a new statement when that occurs.
          </li>
        </ul>
        <li>
          <OutboundLink href="https://leftbraincraftbrain.com/if-then-backyard-coding-game-for-kids/">
            Active Conditionals Game
          </OutboundLink>

        </li>
        <ul>
          <li>
            First, this might be a better game to play outside or in an open space.
          </li>
          <li>
            For every round, where each person gets 3 statements, there is one
            Programmer and everyone else is a Computer.  The Programmer stands
            in front of the Computers and gives them his command.  If
            I ____ (fill in the blank), then you _____ (fill in the blank).
            For example, the Programmer below gave the command “If I turn in
            a circle, Then you turn in a circle.”
          </li>
          <li>
            Moving on up the grade levels, you can move on up the coding
            complexity too with If-Then-Else statements.  For example, the
            Programmer commands “If I raise my right arm, Then you raise your
            left arm, Else raise your right foot.”  So if he just stands there
            and does nothing, the Computers should all be raising their right
            foot.  This gets pretty funny, pretty fast.
          </li>
        </ul>
      </ul>
      <li>Lesson 2 - Conditionals and Touching</li>
      <ul>
        <li>Conditionals</li>
        <ul>
          <li>Make a balloon sprite</li>
          <li>
            Everyone’s game should have at least two sprites (the player sprite
            and the balloon sprite) with only the initialization code (the other
            code should can be deleted from lesson 1).
          </li>
          <li>Use conditionals to change how the player moves:</li>
          <ul>
            <li>While you add the code:</li>
            <ul>
              <li>Player Code </li>
              <img src={videogame21} alt="use arrows to make player move" height="400" />
              <li>Describe why you need a forever loop</li>
              <li>Describe the conditionals aspect</li>
              <li>When you press w, you move up</li>
              <li>When you press s, you move down</li>
              <li>When you press a, you turn left</li>
              <li>When you press d, you turn right</li>
            </ul>
          </ul>
        </ul>
        <li>How to shoot/battle</li>
        <ul>
          <li>
            You can make a dart by choose a pencil sprite in the library,
            filling it in in the color, and shrinking it very small
          </li>
          <li>Make sure you are on the dart! Dart Code </li>
          <img src={videogame22} alt="dart code" height="400" />
          <li>Describe Show/Hide </li>
          <li>Describe use of Forever Loop and Conditional </li>
          <li>Explain why you need a clone (to make more ammo shoot) </li>
          <li>
            When you make the clone, then describe that you set the dart to
            come from the player sprite.
          </li>
          <li>
            Then, explain that repeat until touching edge will keep moving
            until it hits the edge.
          </li>
          <li>
            Then, you must delete the clone, so your game does not lag
            from too many.
          </li>
        </ul>
        <li>Improvement Time</li>
        <ul>
          <li>Challenge #1: Make it so you can shoot and pop the balloon.</li>
          <li>Challenge #2: Make it so the balloon sprite moves around.</li>

        </ul>
      </ul>
      <li>Break</li>
      <li>Stretches</li>
      <li>Computer science fun fact of the day:</li>
      <ul>
        <li>
          How come the in-game enemies seem to be &#34;smart&#34; and able to learn from your
          actions? (artificial intelligence)
        </li>
      </ul>
      <li>Lesson 3 - Variables and Operators</li>
      <ul>
        <li>Score, Timer, Lives</li>
        <ul>
          <li>
            Make a variable block in the data section called “HP”, “Lives”,
            or “Health”
          </li>
          <li>
            In the player sprite, set your health and change your lives, if
            touching balloon.
          </li>
        </ul>
        <li>Win Condition/Game Over</li>
        <ul>
          <li>
            Make a “Game Over” screen from the paintbrush under the backdrop
            section.
          </li>
          <img src={videogame31} alt="make 'game over' background" height="300" />
          <li>
            If your health gets to 0 or less, switch to the Game over screen,
            hide the player, and stop the game.
          </li>
          <li>
            Since you want to start with the backdrop on the original, make
            sure you initialize the backdrop by putting a “switch backdrop
            to” block at the beginning of the code.
          </li>
          <li>Player code </li>
          <img src={videogame32} alt="player code" height="500" />
          <li>
            Also, make sure you initialize the player by adding show when
            flag is clicked.
          </li>
          <li>Describe some of the operator blocks</li>
          <li>
            Now, go to the dart sprite as we are gonna make the darts scatter more.
          </li>
          <li>
            Also, we are going to have the darts disappear when they touch the
            balloon. Dart Code
          </li>
          <img src={videogame33} alt="dart code" height="400" />
          <li>
            Now, go to the player sprite, and add a timer code that goes up by
            1 second as the game continues.
          </li>
          <li>Player code</li>
          <img src={videogame34} alt="set timer to zero and change by 1 every second" />
        </ul>
      </ul>
      <li>Improvement Time</li>
      <ul>
        <li>Challenge #1: Add a level variable and an balloons popped variable</li>
        <li>
          Challenge #2: Make a “Win background” and make it able to switch if you survive
          long enough (timer)
        </li>
      </ul>
      <li>Final Game Work Time</li>
    </ul>
    <h2>Day 3</h2>
    <ul>
      <li>Intro</li>
      <li>
        Explanation of game balancing: Game balancing is all about making a game fair for
        all of the players. If a game is fair, then it is called, “balanced.” Ask the coders
        if they know why this is important?
      </li>
      <li>Lesson 4 - AI Enemy </li>
      <ul>
        <li>Create AI Enemy</li>
        <ul>
          <li>
            Take time to discuss slowly and make sure all the kids are on the
            same page.
          </li>
          <li>
            Delete the touching balloon from player script (the code in the
            circle), because you will add that on the balloon page (so multiple
            balloons will do more damaging when touching).
          </li>
          <li>
            Start with the hide block, then the wait 1 or 2 secs to create the
            AI balloon.
          </li>
          <li>
            Then, discuss how the AI balloon is like making clones of the dart,
            but now they come at random times.
          </li>
          <li>
            Next, describe that the balloon may come from the left (x=-200) or
            right (x=200) at random height (y). Then, they appear and move
            towards the player.
          </li>
          <li>Also, if your balloon ever gets hit by the dart then you delete him.</li>
          <li>Now, add the balloons popped variable by setting and changing it.</li>
          <img src={videogame41} alt="If you balloon gets hit by a dart, it should disappear" height="450" />
          <li>Improvement Time</li>
          <ul>
            <li>Challenge #1: Make different types of balloons!</li>
            <li>
              Challenge #2: Make different guns. Hint: Duplicate the dart
              code and change it!
            </li>
          </ul>
          <img src={videogame42} alt="finished project" height="450" />
        </ul>
      </ul>
      <li>Final Game Work Time</li>
      <li>Break</li>
      <li>Stretches</li>
      <li>Computer science fun fact of the day: </li>
      <ul>
        <li>
          How is it possible for you and dozens of other people to play online simultaneously
          and still have the game feel responsive most of the time? (networking, client-server
          architecture)
        </li>
      </ul>
      <li>
        Networks game: Have students break into groups of 4, 2 players form a team.
        Give each group a set of Networks Card. Students will take turns trying to
        get the other player to guess what the word on the card is without using
        hand gestures or &#34;banned words&#34;. The other team keeps score by counting how
        many word hints the non-guessing player had to give. Once the guesser gets
        the word correct, the other team goes. Lowest score wins.
      </li>
      <ul>
        <li>
          Concept: sometimes your networks lag. This is because the networks
          have to send out so much data to different computers at the same time
          and it sometimes overlaps. This is like how our &#34;banned words&#34; can&#39;t
          get through because of &#34;collisions&#34;
        </li>
        <li>
          If you don&#39;t have a set of cards, you can find them
          {' '}
          <OutboundLink href="https://docs.google.com/document/d/1jJ7s9x-4-wk4s-2Y1IWm6FoPk-zIlJ30K6yjtNJwSEw/edit">
            here
          </OutboundLink>
        </li>
      </ul>
      <li>Lesson 5 - Design a Sprite</li>
      <ul>
        <li>Design Sprite</li>
        <li>Create Costumes</li>
        <li>Import Character</li>
      </ul>
      <DesignYourOwnSprite />
      <li>Final Game Work Time</li>
    </ul>
    <h2>Day 4</h2>
    <ul>
      <li>Intro</li>
      <li>Lesson 6 - Improving Knowledge</li>
      <ul>
        <li>Introduce to scratch wiki</li>
        <ul>
          <li><OutboundLink href="https://en.scratch-wiki.info/wiki">https://en.scratch-wiki.info/wiki</OutboundLink></li>
          <li>
            <OutboundLink href="https://en.scratch-wiki.info/wiki/Scratch_Wiki:Table_of_Contents/Scripting_Tutorials">
              https://en.scratch-wiki.info/wiki/Scratch_Wiki:Table_of_Contents/Scripting_Tutorials
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://en.scratch-wiki.info/wiki/How_to_Make_a_Basic_Platformer">
              This one is a good example
            </OutboundLink>

          </li>
        </ul>
        <li>
          Tell the students they are able to remix code from other games on Scratch and make
          it their own! Show them.
        </li>
      </ul>
      <li>Final Game Work Time</li>
      <li>Break</li>
      <li>Stretches</li>
      <li>Computer science fun facts of the day: </li>
      <ul>
        <li>
          When you type in words on a search engine&#39;s web page, how does it give you
          back the results so quickly? (search algorithms, parallel computing)
        </li>
        <li>
          How can the retailer accurately predict what other items you might like to buy
          based on what you&#39;ve recently bought? (artificial intelligence, machine learning)
        </li>

      </ul>
      <li>
        Parallel Processing Guessing Game - Students play this game as a class. Have the
        class line up horizontally across the board. Each round is a 6 letter word of your
        choice. Draw 6 dashes on the board where you will fill in the letters
      </li>
      <ul>
        <li>
          For the first round, go down the line and have each student take a guess at
          what the first letter is. If it&#39;s correct fill it in. If not, go to the
          next student. Do this for each letter and tally how many guesses it takes
          to get the whole word
        </li>
        <li>
          For the second round, play like traditional hangman where the guesses can
          apply to any letter in the word. This is the &#34;parallel processing
          version&#34;
        </li>
        <li>
          Concept: Explain parallel processing and how it helps us go through
          algorithms faster
        </li>
      </ul>
      <li>Final Game Work Time</li>
    </ul>

    <h4>Optional Other Websites:</h4>
    <ul>
      <li>
        <OutboundLink href="https://code.org/">Code.org</OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://www.codecademy.com/">Codecademy.com</OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://www.touchdevelop.com/g">Touch develop</OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://www.khanacademy.org/partner-content/pixar">PixarInABox.org</OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://csfirst.withgoogle.com/c/cs-first/en/curriculum.html">CS First</OutboundLink>
      </li>
    </ul>
  </Layout>
);
