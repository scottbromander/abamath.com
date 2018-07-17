import React from "react";

export default ({ data }) => {
  const districtClasses = data.allCommunityEducationClasses;
  return (
    <div>
      <h1>{districtClasses.edges[0].node.fields.className}</h1>
      <pre>{JSON.stringify(districtClasses, null, 2)}</pre>
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
            slug
          }
        }
      }
    }
  }
`;