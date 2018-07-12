import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      Curriculum 
    </h1>
    
  </div>

export const query = graphql`
  query CurriculumQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
` 