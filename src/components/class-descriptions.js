import React from "react";
import Link from "gatsby-link";
import codingIcon from "../images/coding-icon.png";
import videoGameIcon from "../images/video-game-icon.png";
import websiteIcon from "../images/website-icon.png";
import "./class-descriptions.css";

export default class ClassDescriptions extends React.Component {
    render(){
      return(
          <div id="camps">
          <h1>Camps</h1>
          <div id="icons">
            <img src={codingIcon} id="coding"/>
            <img src={websiteIcon} id="website"/>
            <img src={videoGameIcon} id="videoGame"/>
            <div id="newLine"></div>
          </div>
            <div id="classList">
                {this.props.allOfferedClasses.map(({ node }) =>
                    <div id="class">
                        <h2>
                            {node.fields.className}
                            </h2>
                        <h3>
                            {node.fields.classgrades}
                            </h3>
                        <p>
                            {node.fields.classshortdescription}
                            </p>
                           <button type="button"> <Link to = {node.fields.slug}>Find A Camp!</Link></button>
                    </div>
                    )}
                </div>
            </div>
      )
    }
}