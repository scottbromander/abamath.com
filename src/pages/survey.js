import React from "react";

<meta>A survey for Abamath students to share their thoughts on the camp</meta>

export default ({ data }) =>
 <div>
   <h1>
     Survey
   </h1>
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIVmVmb9fr-6MS11je_cjTXgSWsWrbrjcj60d4AAVq15XMUA/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
   <link rel="stylesheet" href="public/css/reset.css" /> 
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
