import React from "react";
import Link from "gatsby-link";
import "./district-list.css";

export default class DistrictsList extends React.Component {
    render() {
        return (
            <div id="districtList">
                <h2>Where We Are</h2>
                <div id="splitLine"><hr></hr></div>
                <div id="grid">
                    {this.props.allDistricts.map(({ node }) =>
                        <div key={node.id}>
                            <Link to={node.fields.slug}>
                                {node.fields.districtName}
                            </Link>
                        </div>
                    )}
                </div>
                <div id="newLine"></div>
            </div>
        )
    }
}