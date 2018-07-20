import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

export default ({ data }) => {
  const districtClasses = data.allCommunityEducationClasses;
  return (
    <div>
      <div>
        <h1>{districtClasses.edges[0].node.fields.className}</h1>
        <h2>Time: {districtClasses.edges[0].node.fields.time}{""}</h2>
        <h2>District: {districtClasses.edges[0].node.fields.district}{""}</h2>
        <h2>Grades: {districtClasses.edges[0].node.fields.grades}{""}</h2>
        <h2>Days: {districtClasses.edges[0].node.fields.days}{""}</h2>
        <h2>Dates: {districtClasses.edges[0].node.fields.startdate}{""} - {districtClasses.edges[0].node.fields.enddate}{""}</h2>
        <p> {districtClasses.edges[0].node.fields.description}{""}</p>
      </div>

      <a href={districtClasses.edges[0].node.fields.link}><button>Sign up!</button></a>

      {/* <div id="district-classes">
        <h2>Other classes in Minnetonka</h2>
      </div>

      <div id="MNclasses">
        <h2>Other {districtClasses.edges[0].node.fields.className}{""} Classes in Minnesota</h2>
      </div>

      <div id= "searchOther">
        <h2>Search All Classes</h2>
      </div> */}

    </div>
  );
};

export const query = graphql`
  query DistrictClassQuery($slug: String!) {
    allCommunityEducationClasses(filter: {fields: { slug: { eq: $slug } }}) {
      totalCount
      edges {
        node {
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
    }
  }
`;