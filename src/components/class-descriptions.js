import React from "react";
import Link from "gatsby-link";
import codingIcon from "../images/coding-icon.png";
import videoGameIcon from "../images/video-game-icon.png";
import websiteIcon from "../images/website-icon.png";

export default class ClassDescriptions extends React.Component {
    render(){
      return(
        <div id="classList">
            {this.props.allOfferedClasses.map(({ node }) =>
                <div>
                    <Link to = {node.fields.slug}>
                    <h2>
                        {node.fields.className}
                        </h2>
                    <p>
                        {node.fields.classgrades}
                        </p>
                    <p>
                        {node.fields.classdescription}
                        </p>
                    </Link>
                </div>
                )}
            </div>
      )
    }
}