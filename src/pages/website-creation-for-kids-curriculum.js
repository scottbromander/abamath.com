import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import ClassroomProcedures from '../components/curriculum/ClassroomProcedures';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';

<meta></meta>

export default class WebsiteCreationForKidsCurriculum extends React.Component {
  render(){
    return(
      <div>
        <h1>
          2019 Website Creation for Kids
        </h1>

        <h4>Description:</h4>
        <p>Explore the fundamentals of website design by learning HTML and CSS. By the end of the week, you will be 
            able to create your very own website, whether it’s a spot to showcase your talent, a photo/video blog, or 
            a joke site! Mixed into the code is time away from the screen learning basics of binary, hexadecimal, 
            and user experience and interface. </p>

        <h4>Timeline</h4>
        <p>Four 3-hour days for a total of 12 hours of curriculum for 3rd - 6th graders</p>

        <h4>By the end of the class, students will be able to</h4>
        <p>Create HTML and CSS scripts</p>
        <p>Describe user interface and user experience</p>
        <p>Describe different website navigation tools</p>
        <p>Develop their own website</p>

        <h4>Primary Website</h4>
        <p><a href="https://code.org/weblab">Web lab</a></p>

        <ClassroomChecklist />
        <ClassroomAndHallwayProcedures />

        <h4>Setting up a code.org classroom: </h4>
        <ol>
            <li>On the dashboard press “add a new classroom section”. Use the “word login” option.</li>
            <li>Add students to the classroom. This will automatically give them a “Secret word”. </li>
            <li>Students may now navigate to code.org/join. They will need to enter the “login info” class code that’s 
                found on the dashboard, and then enter their secret words.</li>
            <li>Any progress the student make can now be viewed by the instructor, as well as have passwords reset.</li>
        </ol>

        <h2>Day 1 - Website Intro and HTML </h2>
        <ul>
            <li>Introduction</li>
                <ul><li>Names/Nametags</li>
                <li>Coding Experience</li>
                <li>Favorite thing to do on the computer</li></ul>
            <li>Rules and coder expectations</li>
            <li>Tell the students that there will be break time and what time it will be</li>
            <li>Pair Investigation - Students will form pairs to explore website design. Instruct them to find a store, 
                school, and company website. Students should identify key website elements as discussed previously as 
                well as unique elements that they find interesting on the individual websites. Have students note 
                differences between the website structures (eg what tabs does each website have? Is there more text or 
                pictures?). Instructor should rotate between groups to facilitate conversation </li>
                <ul><li>Set a 10 minutes timer on this and then share out their ideas</li></ul>
            <li>Instruction - Go through the <a href="https://docs.google.com/presentation/d/1duAlik03_B4Oq3Pa5OzCEmnvSqrnt_-5RbLpwBB_y2k/edit#slide=id.g3cb95f00f8_1_17">
                Website Elements presentation</a></li>
            <li>Brainstorm Personal Website - Students will brainstorm about the website they would like to build. 
                Instructor should also ensure that all ideas fit within expectations and rules.</li>
                <ul>
                    <li>First ~15 minutes have students brainstorm 10 ideas. If students finish this quicker than others, have 
                        them think of website content </li>
                    <li>For ~5 minutes, instruct students to choose one final topic and think about what might go on it </li>
                </ul>
            <li>Instruction - Go through <a href="https://docs.google.com/presentation/d/18xy8lIEbCUxdCVp5271N3BIO5TenHSoPmiaIJtVdVCQ/edit#slide=id.g3cb9327011_0_0">
                UX/UI presentation</a></li>
            <li>Present Ideas - Invite students to pair-share ideas or share their ideas with the group as a whole. 
                Encourage non-presenters to identify good qualities in the design and suggest improvements. </li>
            <li>Break - hour in </li>
            <li>Stretches </li>
            <li>Have students join code.org classroom and navigate to Web Lab (Instructions for making a classroom are 
                above) </li>
            <li>HTML Lesson 1 - Making the website content </li>
                <ul><li>Explain that the head is where we link in different elements of our page and that the body includes all 
                    of the content that we see on the page </li> </ul>


        </ul>
    </div>
    )
  }
}