import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>This is a district page
      <h3>{post && post.frontmatter && post.frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query districtPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;