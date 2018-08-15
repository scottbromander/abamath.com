import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import "./curriculum.css"; 

<meta></meta>

export default class ClassroomChecklist extends React.Component {
  render(){
    return(
      <div>
        <h2>
          Classroom Checklist
        </h2>
        <ol>
            <li>Power up computers immediately upon arrival. Some will have a long startup process 
                (Leave a couple extra computers logged on if another crashes during the class).</li>
            <li>Find/Read Emergency Procedures for the classroom or ask the community ed director about
                 emergency procedures</li>
            <li>Ask what the expectations of instructors are for their district (they are all different). </li>
            <li>Ask for the Check-In Procedure: Do you pick up the students, or do they get dropped off 
                in the classroom?</li>
            <li>Ask the community ed director if and where they can go outside for break</li>
            <li>Find where the nearest bathrooms and drinking fountains are</li>
            <li>Verify the pick up procedure at the end of the day</li>
            <li>Do you wait for the kids or do the school officials?</li>
            <li>Do you bring the kids somewhere or keep them in the classroom?</li>
            <li>When the parents drop the children off, introduce yourself and thank them for 
                being in the class. Explain the pickup process and encourage them to bring a snack
                 and earbuds the next day (if the school where you are teaching does not provide them.) </li>
        </ol>


      </div>
    )
  }
}