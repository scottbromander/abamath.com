import React from "react";

export default ({ data }) => {
  const post = data.allCommunityEducationClasses;
  return (
    <div>
      {/* <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      {JSON.stringify(post)}
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