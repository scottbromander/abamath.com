import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Link from "gatsby-link"; 
import ClassroomProcedures from '../components/curriculum/ClassroomProcedures';
import ClassroomChecklist from '../components/curriculum/ClassroomChecklist';
import ClassroomAndHallwayProcedures from '../components/curriculum/ClassroomAndHallwayProcedures';

<meta>Curriculum for website creation class</meta>

export default class WebsiteCreation extends React.Component {
  render(){
    return(
      <div>
        <h1>
          2018 Website Creation 
        </h1>
        
        <h4>Description:</h4>
        <p>Explore the fundamentals of website design by learning HTML and CSS. By the end of the week, you will be 
            able to create your very own website, whether it’s a spot to showcase your talent, a photo/video blog, or 
            a joke site! Mixed into the code is time away from the screen learning basics of binary, hexadecimal, 
            and user experience and interface. </p>

        <h4>Timeline</h4>
        <p>Four 3-hour days for a total of 12 hours of curriculum for 7th - 9th graders</p>
        <p>Day 1 - Website Intro and HTML</p>
        <p>Day 2 - UX/UI and HTML</p>
        <p>Day 3 - CSS</p>
        <p>Day 4 - Build Time</p>

        <h4>By the end of the class, students will be able to</h4>
        <p>Create HTML and CSS scripts</p>
        <p>Describe user interface and user experience</p>
        <p>Describe different website navigation tools</p>
        <p>Develop their own website</p>

        <h4>Primary Websites</h4>
        <p><a href="https://www.codecademy.com/learn/make-a-website">Codecademy: Make a Website</a></p>
        <p><a href="https://www.codecademy.com/learn/learn-html">Codecademy: Learn HTML</a></p>
        <p><a href="https://www.codecademy.com/learn/learn-css’">Codecademy: Learn CSS</a></p>
        <p><a href="https://code.org/weblab">Web lab</a></p>

        <ClassroomChecklist />

        <ClassroomAndHallwayProcedures />

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
            <li>Have students create Codecademy accounts</li>
            <li>Have students begin Learn HTML </li>
                <ul><li>They should have ~20 minutes to work</li></ul>
            <li>Break</li>
                <ul><li>Morning - 10:30</li>
                <li>Afternoon - 2:30</li></ul>
            <li>Computer science fun fact of the day: </li>
                <ul>
                    <li>Learning computer programming is similar to learning a new language </li>
                    <li>Just like there are many languages spoken and written in the world, there are many different 
                        computer languages. </li>
                    <li>Different programming languages do different things. For example, to build a website you might 
                        use the languages Python, HTML, CSS or JavaScript. For a mobile app, you might use Java or 
                        Objective C. For video games, you might use C++. The language that is selected depends on what 
                        you are trying to create and what you are trying to get the computer to do. </li>
                </ul>
            <li>Students continue to work on Learn HTML </li>
                <ul><li>Daily Goal: Complete Introduction to HTML and begin HTML Document Standards lessons</li>
                <li>**Note: If students seem to be struggling a lot doing website design, start them with code.org or 
                    python lessons in codecademy, and when they feel more comfortable, they can return to HTML and CSS 
                    lessons </li></ul>
            <li>Stretches</li>
            <li>3/4ths Break - Stand Up / Sit Down Game</li>
                <ul><li>As a break (you judge when it is needed), play the stand up / sit down game. To play, you say 
                    “Stand up if… you have been out of the country” or other examples. If they are cool statements, ask 
                    the students to elaborate on where they’ve been or whatever fits the question. </li></ul>
        </ul>

        <h2>Day 2 - UX/UI and HTML</h2>
        <ul>
            <li>Introduction</li>
            <li>Instruction - Go through <a href="https://docs.google.com/presentation/d/18xy8lIEbCUxdCVp5271N3BIO5TenHSoPmiaIJtVdVCQ/edit#slide=id.g3cb9327011_0_0">
                UX/UI presentation</a></li>
            <li>Develop UI and UX - Instructor should demonstrate the basics of creating UI and UX mockups. This will 
                include how to make a flow diagram for the website as well as blocking out content. Then the students 
                will develop UI/UX schematics for their own website </li>
            <li>Present Ideas - Invite students to pair-share ideas or share their ideas with the group as a whole. 
                Encourage non-presenters to identify good qualities in the design and suggest improvements. </li>
            <li>Have students continue working on Learn HTML </li>
                <ul><li>Students should have about 45 minutes to work on this</li></ul>
            <li>Break</li>
                <ul><li>Morning - 10:15</li>
                <li>Afternoon - 2:15</li></ul>
            <li>Computer science fun fact of the day: </li>
                <ul><li>How come it's so easy and enjoyable to simply browse around and get lost for hours on Facebook 
                    and other sites? (user interface) </li></ul>
            <li>Instruction - Teach kids how binary works and end saying we'll learn more about hex and colors tomorrow </li>
            <li><a href="https://docs.google.com/presentation/d/1qzPx6On5yalVOBJpsmvSd3ukTSeqbMw7ohCmeEKpfS8/edit#slide=id.g3cb47cac93_0_146">
                Binary Presentation </a></li>
            <li>Stretches</li>
            <li>Have students complete Learn HTML, HTML Tables, and begin Learn CSS </li>
                <ul><li>Daily Goal: Complete HTML Document Standards and Setups and Selectors in Learn CSS</li></ul>
            <li>3/4ths Break - <a href="https://www.icebreakers.ws/active/telephone-charades.html">Telephone Charades Game </a></li>
                <ul>
                    <li>A mime</li>
                    <li>A nerd’s first date</li>
                    <li>A cat bathing itself</li>
                    <li>Going skydiving</li>
                    <li>Mowing the law </li>
                    <li>Making tea</li>
                    <li>Fishing and catching a huge fish </li>
                </ul>
            <li>Last 10 minutes - <a href="https://create.kahoot.it/login?next=%2Fdetails%2Fwebsite-creation-html-older-students%2F83fcc954-7bd8-4b0b-a1b8-8dd69cd5bcca">
                HTML Kahoot</a></li>
            </ul>

        <h2>Day 3 -  CSS</h2>
        <ul>
            <li>Introduction</li>
            <li>Have students begin Learn CSS</li>
                <ul><li>First half goal: Complete CSS Visual Rules and begin The Box Method/Changing the Box Method 
                    lessons</li></ul>
            <li>Instruction - Teach kids how hexadecimal works and how it's used to form colors</li>
                <ul><li><a href="">
                Hexadecimal and Color Presentation</a></li></ul>
            <li>Break</li>
            <li>Stretches</li>
            <li>Computer science fun fact of the day: </li>
                <ul><li>68.7% of computer science majors had at least one job offer prior to walking the stage at 
                    graduation. </li></ul>
            <li>Have students continue Learn CSS </li>
                <ul>
                    <li>Second half goal: Complete The Box Model lesson, Changing the Box Method, and Displaying and 
                        Positioning lesson</li>
                    <li>Fast students can continue until they have finished all of the CSS lessons </li>
                    <li>Note: Remind students that the next day they will be returning to Codecademy only if they would 
                        like to. Day 4 focuses on actually creating their new website </li>
                </ul>
            <li>3/4ths Break - <a href="https://www.icebreakers.ws/active/line-up-game.html">Line-Up Game</a></li>
                <ul><li>Ideas <a href="http://paradigmshiftleadership.com/101-ways-to-line-up-a-group-a-classic-team-building-and-icebreaker-activity/">
                    here</a></li></ul>
            <li>Last 10 minutes - <a href="https://create.kahoot.it/login?next=%2Fdetails%2Fwebsite-creation-css%2F3926fc92-5248-4ebb-bdd3-e45833b0dc5d">
                CSS Kahoot</a></li>
        </ul>

        <h2>Day 4 - Build Time </h2>
        <ul>
            <li>Introduction</li>
            <li>Have students create code.org accounts</li>
            <li>Show students the abamathinstructors <a href="https://thimbleprojects.org/abamathinstructors/509958">
                example </a> with multiple pages</li>
            <li>Have students navigate to New Project and begin creating their own website</li>
                <ul><li>Hand out HTML and CSS quick sheets </li></ul>
            <li>Websites they could make: fake wikipedia page about themselves, fake windows update screen, this button website <a href="http://sprott.physics.wisc.edu/pickover/pc/redbut.html">
                here</a></li>
            <li>Break</li>
            <li>Stretches</li>
            <li>Computer science fun fact of the day: </li>
                <ul><li>The first computer programmer was a woman named Ada Lovelace. </li></ul>
            <li>3/4ths Break - If the students need a break, ask them which game from the last 3 days they liked best 
                and want to play, then lead them through it. </li>
            <li>Have students get ready to present their website to the class</li>
                <ul><li>Tell students they will each get 3-5(depending on class size)  minutes to present their websites 
                    to the class</li></ul>
            <li>Website Presentations</li>
        </ul>


    </div>
    )
  }
}