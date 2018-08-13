import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import ClassroomProcedures from '../components/curriculum/ClassroomProcedures';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';

<meta></meta>

export default class GirlScoutCurriculum extends React.Component {
  render(){
    return(
      <div>
        <h1>
          1-Day Girl Scout Event 
        </h1>
        
        <h3>Think Like a Programmer</h3>
        <h5>Girls learn and apply computational thinking:</h5>
        <ol>
            <li>Identify the Problem</li>
            <li>Break it into smaller chunks</li>
            <li>Look for patterns</li>
            <li>Identify a solution that works for everyone </li>
        </ol>
        <h5>Girls learn: You can solve big problems by taking it step-by-step!</h5>
        
        <h3>Goals set by Abamath:</h3>
        <h5>Less focus on the nuts and bolts of coding</h5>
        <h5>General understanding of how coding is used in the real world</h5>

        <ul>
            <li>Introduction</li>
            <ul>
              <li>Names/Nametags</li>
              <li>Coding Experience</li>
              <li>Favorite thing to do on the computer</li>
              </ul>
            <li>Rules and coder expectations</li>
            <li>Tell the scouts that there will be break time and what time it will be</li>
            <li>Mars Rover (20 minutes) - Ask for a volunteer to be the Rover. The Rover should close 
                their eyes and stand at the front of the room/hallway. Have other scouts create a path 
                using their chairs as boundaries. Place 3 objects throughout the course. Taking turns, 
                the student should direct the Rover(whose eyes are still closed) through the obstacles 
                to retrieve and bring back all the objects. Tell the class that they cannot touch the
                 Rover or move the 3 objects. If there are 2+ instructors, one can be the rover and 
                 the other can moderate.</li>
                <ul>
                    <li>Additional play version: </li>
                    <ul>
                        <li>Have teams of 2. Time each team with the players giving the robot 
                            instructions. 1 point per second and 5 for every obstacles encountered</li>
                        <li>Have teams trying to reach specific locations first, or have them try to 
                            obtain objects (ex. markers). First team to reach all the locations/pick 
                            up all the objects win!</li>
                    </ul>
                    <li>Questions to ask scouts:</li>
                        <ul>
                            <li>What was the big problem there?</li>
                            <li>How did we break the problem down?</li>
                            <li>How did it feel to be the robot? How did it feel to be giving the 
                                robot instructions?</li>
                        </ul>
                </ul>


        </ul>
    
    </div>
    )
  }
}