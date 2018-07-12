import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) =>
  <div>
    <h1>
      Camps 
    </h1>
    {data.classes.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >

            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
            </g.H3>
            <p>
              {node.excerpt}
            </p>
          </Link>
        </div>
      )}
      <h2>
        List of Sites Used: 
        </h2>
      <div>
      <a href="https://studio.code.org/home" target="_blank">code.org</a> 
      </div>
      <div> 
      <a href="https://www.codecademy.com/learn" target="_blank">codecademy.com</a>
      </div> 
      <div>
      <a href="https://codecombat.com/" target="_blank">codecombat.com</a> 
      </div>
      <div>
      <a href="https://scratch.mit.edu/" target="_blank">scratch.mit.edu</a> 
      </div>
      <div>
      <a href="https://www.playcodemonkey.com/challenges/0" target="_blank">Code Monkey</a> 
      </div>
      <div>
      <a href="https://blockly-games.appspot.com/" target="_blank">Blockly Games</a> 
      </div>
      <div>
      <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank">Khan Academy</a> 
      </div>
      <div>
      <a href="https://csfirst.withgoogle.com/c/cs-first/en/curriculum.html" target="_blank">CS First</a> 
      </div>
      <break> </break>
  </div>
  

export const query = graphql`
  query CampsQuery {
    classes: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "*/classes/.*\\.md$/"}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    },
  }  
`