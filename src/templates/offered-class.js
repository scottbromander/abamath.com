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
        {/* <div>
          <h1>{specificClass.district} {specificClass.className}</h1>
          <h2>Time: {specificClass.time}</h2>
          <h2>Grades: {specificClass.grades}</h2>
          <h2>Days: {specificClass.days}</h2>
          <h2>Dates: {specificClass.startdate} - {specificClass.enddate}</h2>
          <p> {specificClass.description}</p>
        </div>

        <OutboundLink href={specificClass.link}><button>Sign up!</button></OutboundLink>

        <div id="district-classes">
        <h2>Other classes in {specificClass.district}{""}</h2>
        <ClassTable
          offeredClasses={this.props.data.allOfferedClasses.edges}
          searchText={this.state.searchText}
        />
        </div>

        <div id="district-classes">
        <h2>Other {specificClass.className}{""} Camps</h2>
        <ClassTable
          offeredClasses={this.props.data.allOfferedClasses.edges}
          searchText={specificClass.className}
        />
        </div> */}

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