import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import ClassTable from "../components/ClassTable";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default class OfferedClass extends React.Component {

  render() {
    const specificClass = this.props.data.specificClass.edges[0].node.fields;
    return (
      <div>
        <div>
          <h1>{specificClass.className}{""}</h1>
          <p>Grades: {specificClass.classgrades}{""}</p>
          <p>{specificClass.classdescription}{""}</p>
        </div>

        <div id="offerred-classes">
        <h2>Current {specificClass.className}{""} Camps</h2>
        <ClassTable
          districtClasses={this.props.data.allDistrictClasses.edges}
          searchText={specificClass.className}
        />
        </div>
      </div>
    );
  }
};

export const query = graphql`
query OfferedClassQuery($slug: String!) {
  specificClass: allCommunityEducationOfferedClasses(filter: {fields: { slug: { eq: $slug } }}) {
    totalCount
    edges {
      node {
        id
        fields {
          slug,
          classgrades,
          classdescription,
          className
        }
      }
    }
  },

  tableClass: allCommunityEducationDistrictClasses(filter: {fields: { slug: { eq: $slug } }}) {
    totalCount
    edges {
      node {
        id
        fields {
          className
          days
          grades
          startdate
          enddate
          district
          link
          time
          description
          link
          slug
        }
      }
    }
  },

  allDistrictClasses: allCommunityEducationDistrictClasses {
    totalCount
    edges {
      node {
        id
        fields {
          className
          days
          grades
          startdate
          enddate
          district
          link
          time
          description
          slug
        }
      }
    }
  }
}
`;