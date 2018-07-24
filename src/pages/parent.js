import React from "react";


export default ({ data }) =>
 <div>
   <h1>
     Parent
   </h1>
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnoMNgS7yI-we5do-NLzlu3LX_r44-me-mxJvXvWDSDigvzg/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  <link rel="stylesheet" href="public/css/reset.css"/>
 </div>


export const query = graphql`
 query ParentQuery {
   site {
     siteMetadata {
       title
     }
   }
 }
`
