import React from "react";
import ClassTable from "../components/ClassTable";
import "./offered-class.css";

export default class OfferedClass extends React.Component {

  render() {
    const specificClass = this.props.data.specificClass.edges[0].node.fields;
    return (
      <div>
        <div id="description">
          <h1>{specificClass.className}{""}</h1>
          <h2>Grades: {specificClass.classgrades}{""}</h2>
          <p>{specificClass.classdescription}{""}</p>
        </div>

        <div id="offerred-classes">
        <h2>Upcoming {specificClass.className}{""} Camps</h2>
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