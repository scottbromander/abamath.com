import React from "react";
import Link from "gatsby-link";
import codingIcon from "../../images/coding-icon.png";
import videoGameIcon from "../../images/video-game-icon.png";
import websiteIcon from "../../images/website-icon.png";
import "./class-descriptions.css";

export default class ClassDescriptions extends React.Component {
    render(){
      return(
          <div id="camps">
          <h2>Camps</h2>
          <div id="icons">
            <img src={codingIcon} alt="Coding" id="coding"/>
            <img src={websiteIcon} alt="Website" id="website"/>
            <img src={videoGameIcon} alt="Videogame" id="videoGame"/>
            <div id="newLine"></div>
          </div>
            <div id="classList">
                {this.props.allOfferedClasses.map(({ node }) =>
                    <div id="class" key={node.id}>
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