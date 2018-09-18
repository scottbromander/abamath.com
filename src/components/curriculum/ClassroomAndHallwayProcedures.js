import React from "react";
import "./curriculum.css";

// // <meta></meta>

export default class ClassroomAndHallwayProcedures extends React.Component {
    render() {
        return (
            <div>
                <h2>Classroom Procedures:</h2>
                <p>Rules we would like them to guess themselves (if not, lead them that direction until
                they can guess)</p>
                <ul>
                    <li>Be respectful and encouraging - help each other out</li>
                    <li>Use your indoor voices, this is a computer lab</li>
                    <li>If you have a question, raise your hand</li>
                    <li>Don’t touch others computers (we want them to learn on their own!)</li>
                    <li>Stay on the websites we are working on</li>
                    <li>At the end of class, clean your space</li>
                    <li>Remember you are using school property, so you are responsible for the property
                     you use for the week</li>
                    <li>Explain the class structure: Break halfway (Snacks, Bathroom, Outside?) and
                    Hands-on Activities</li>
                </ul>
                <h2>Hallway Procedures:</h2>
                <ul>
                    <li>Important! Be sure to set expectations BEFORE you leave the room. </li>
                    <li>Expectations:</li>
                    <li>We use indoor voices in the hall</li>
                    <li>We walk and keep our hands to ourselves</li>
                    <li>We walk together. No one runs ahead in front of the teacher. The teacher is the
                        first one in the line.</li>
                    <li>We will take bathroom breaks</li>

                </ul>
            </div>
        )
    }
}