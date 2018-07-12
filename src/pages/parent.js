import React from "react";


export default ({ data }) =>
 <div>
   <h1>
     Parent
   </h1>
     <p>
     This is our parent page 
       </p>
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
