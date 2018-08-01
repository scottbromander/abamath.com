import React from "react";

<meta>A mailing survey for people to receive information on future Abamath classes</meta>

export default ({ data }) =>
 <div>
   <h1>
     Mailing Survey
   </h1>
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf6q_m5A7e8bGDf-xqbn9exaJW3JP1EBjmpXxLKWPEkoUBxAw/viewform" width="100%" height="2600" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
   <link rel="stylesheet" href="public/css/reset.css" /> 
 </div>




export const query = graphql`
 query MailingQuery {
   site {
     siteMetadata {
       title
     }
   }
 }
`
