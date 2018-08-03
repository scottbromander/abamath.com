import React from "react";
import Link from "gatsby-link";

export default class ClassDescriptions extends React.Component {
    render(){
      return(
        <div>
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