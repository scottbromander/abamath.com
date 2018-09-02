import React from "react";
import Link from "gatsby-link";
import "./class-descriptions.css";

export default class ClassDescriptions extends React.Component {
    render(){
      return(
          <div id="camps">
          <h2>Camps</h2>
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