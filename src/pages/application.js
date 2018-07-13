import React from "react";


export default ({ data }) =>
 <div>
   <h1>
     Application
   </h1>
     <p>
     This is our application page 
       </p>
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
