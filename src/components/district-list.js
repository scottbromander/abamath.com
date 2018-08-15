import React from "react";
import Link from "gatsby-link";
import "./district-list.css";

export default class DistrictsList extends React.Component {
    render(){
      return(
        <div id="districtList">
            <h1>Where We Are</h1>
            <div id="splitLine"><hr></hr></div>
            {this.props.allDistricts.map(({ node }) =>
                <div>
                    <Link to = {node.fields.slug}>
                    <h3>
                        {node.fields.districtName}
                        </h3>
                    </Link>
                </div>
                )}

            <div id="newLine"></div>
            </div>
      )
    }
}