import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import ClassTable from "../components/ClassTable";

export default class DistrictClass extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: props.data.specificClass.edges[0].node.fields.district
    };
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const specificClass = this.props.data.specificClass.edges[0].node.fields;
    return (
      <div>
        <div>
          <h1>{specificClass.district} {specificClass.className}</h1>
          <h2>Time: {specificClass.time}</h2>
          <h2>Grades: {specificClass.grades}</h2>
          <h2>Days: {specificClass.days}</h2>
          <h2>Dates: {specificClass.startdate} - {specificClass.enddate}</h2>
          <p> {specificClass.description}</p>
        </div>

        <a href={specificClass.link}><button>Sign up!</button></a>

        <div id="district-classes">
        <h2>Other classes in {specificClass.district}{""}</h2>
        <ClassTable
          districtClasses={this.props.data.allDistrictClasses.edges}
          searchText={this.state.searchText}
        />
        </div>

        <div id="district-classes">
        <h2>Other {specificClass.className}{""} Camps</h2>
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
query DistrictClassQuery($slug: String!) {
  specificClass: allCommunityEducationClasses(filter: {fields: { slug: { eq: $slug } }}) {
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
  allDistrictClasses: allCommunityEducationClasses {
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