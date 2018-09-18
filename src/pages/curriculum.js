import React from "react";
import Layout from "../components/layout"
import { Link, graphql } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// // <meta>Description of the different Coding Camps Abamath teaches as well as the websites we use in our curriculum</meta>

export default ({ data }) =>
<Layout>
    <h1>
      Camps 
    </h1>
    <div>
      {data.allOfferedClasses.edges.map(({ node }) =>
          <div>
            <Link to = {node.fields.slug}>
              <h2>
                  {node.fields.className}
                </h2>
              <p>
                {node.fields.classgrades}
                </p>
              <p>
                  {node.fields.classdescription}
                </p>
              </Link>
          </div>
        )}
      </div>
      <h2>
        List of Sites Used: 
        </h2>
      <div>
      <OutboundLink href="https://studio.code.org/home" target="_blank">code.org</OutboundLink> 
      </div>
      <div> 
      <OutboundLink href="https://www.codecademy.com/learn" target="_blank">codecademy.com</OutboundLink>
      </div> 
      <div>
      <OutboundLink href="https://codecombat.com/" target="_blank">codecombat.com</OutboundLink> 
      </div>
      <div>
      <OutboundLink href="https://scratch.mit.edu/" target="_blank">scratch.mit.edu</OutboundLink> 
      </div>
      <div>
      <OutboundLink href="https://www.playcodemonkey.com/challenges/0" target="_blank">Code Monkey</OutboundLink> 
      </div>
      <div>
      <OutboundLink href="https://blockly-games.appspot.com/" target="_blank">Blockly Games</OutboundLink> 
      </div>
      <div>
      <OutboundLink href="https://www.khanacademy.org/computing/computer-programming" target="_blank">Khan Academy</OutboundLink> 
      </div>
      <div>
      <OutboundLink href="https://csfirst.withgoogle.com/c/cs-first/en/curriculum.html" target="_blank">CS First</OutboundLink> 
      </div>
      <break> </break>
  </Layout>
  

export const query = graphql`
  query CampsQuery {
    allOfferedClasses: allCommunityEducationOfferedClasses {
      totalCount
      edges {
        node {
          id
          fields {
            slug,
            classgrades,
            classdescription,
            className
          }
        }
      }
    }
  }  
`