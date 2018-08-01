import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import ClassTable from "../components/ClassTable";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default class OfferedClass extends React.Component {

  render() {
    return (
      <div>
          {JSON.stringify(this.props)}
        <div>
          <h1>{allClasses.className}{""}</h1>
          <h2>Grades: {allClasses.grades}{""}</h2>
          <p>{allClasses.description}{""}</p>
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
          classdescription
        }
      }
    }
  },
  allClasses: allCommunityEducationOfferedClasses {
    totalCount
    edges {
      node {
        id
        fields {
          slug,
          classgrades,
          classdescription
        }
      }
    }
  }
}
`;