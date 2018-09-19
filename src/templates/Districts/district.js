import React from "react";
import { graphql } from "gatsby";
import ClassTable from "../../components/Class_Table/ClassTable";
import "./district.css";
import Layout from "../../components/layout";

export default class OfferedClass extends React.Component {

  render() {
    const specificDistrict = this.props.data.allCommunityEducationDistrict.edges[0].node.fields;
    return (
      <Layout>
        <div id="info">
          <h1>{specificDistrict.districtName}{""}</h1>
        </div>
        <div id="offerred-classes">
        <h2>Upcoming {specificDistrict.districtName}{""} Camps</h2>
        <ClassTable
          districtClasses={this.props.data.allDistrictClasses.edges}
          searchText={specificDistrict.districtName}
        />
        </div>
      </Layout>
    );
  }
};

export const query = graphql`
query DistrictsQuery($slug: String!) {
  allCommunityEducationDistrict(filter: {fields: { slug: { eq: $slug } }}) {
    totalCount
    edges {
      node {
        id
        fields {
          slug,
          districtName
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