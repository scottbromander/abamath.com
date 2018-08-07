import React from "react";
import Link from "gatsby-link";

export default class DistrictsList extends React.Component {
    render(){
      return(
        <div>
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