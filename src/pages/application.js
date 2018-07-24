import React from "react";


export default ({ data }) =>
 <div>
   <h1>
     Application
   </h1>
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd56ChwSSFvfJ__vrqgv4TLy4KlDqcvwBT8APvWfrRT1o8Mxg/viewform" width="100%" height="2800" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      <link rel="stylesheet" href="public/css/reset.css"/>
       
 </div>


export const query = graphql`
 query ApplicationQuery {
   site {
     siteMetadata {
       title
     }
   }
 }
`
