import React from "react";


export default ({ data }) =>
 <div>
   <h1>
     Survey
   </h1>
     <p>
     This is our survey page 
       </p>
 </div>


export const query = graphql`
 query SurveyQuery {
   site {
     siteMetadata {
       title
     }
   }
 }
`
