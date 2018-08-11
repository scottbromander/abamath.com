import React from "react";
import Link from "gatsby-link";

export default class DistrictsList extends React.Component {
    render(){
      return(
        <div>
            <h2>WHERE WE ARE</h2>
            {this.props.allDistricts.map(({ node }) =>
                <div>
                    <Link to = {node.fields.slug}>
                    <h3>
                        {node.fields.districtName}
                        </h3>
                    </Link>
                </div>
                )}
            </div>
      )
    }
}