import React from "react";

<meta>A survey for Abamath students to share their website projects</meta>

export default ({ data }) =>
 <div>
   <h1>
     Project Submission
   </h1>
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSenTOFHBxk1hqKB6-ZwZ-u0ZxDwXRTelsLv5RjYvhgrgu7uRg/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    <link rel="stylesheet" href="public/css/reset.css" /> 
 </div>




export const query = graphql`
 query ProjectSubmissionQuery {
   site {
     siteMetadata {
       title
     }
   }
 }
`



