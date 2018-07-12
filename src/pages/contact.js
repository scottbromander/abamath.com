import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      Contact
    </h1>
  </div>

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`