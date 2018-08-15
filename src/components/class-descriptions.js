import React from "react";
import Link from "gatsby-link";
import codingIcon from "../images/coding-icon.png";
import videoGameIcon from "../images/video-game-icon.png";
import websiteIcon from "../images/website-icon.png";
import "./class-descriptions.css";

export default class ClassDescriptions extends React.Component {
    render(){
      return(
          <div id="classList">
          <h1>Camps</h1>
          <div id="icons">
            <img src={codingIcon}/>
            <img src={websiteIcon}/>
            <img src={videoGameIcon}/>
            <img src={videoGameIcon}/>
          </div>
            <div>
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
                            <Link to = {node.fields.slug}><button type="button">Find A Camp!</button></Link>
                    </div>
                    )}
                </div>
            </div>
      )
    }
}