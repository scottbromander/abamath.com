import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>  
      {data.allCommunityEducationClasses.edges.map(({ node }) =>
        node.fields && node.fields.slug ? <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >

            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.fields.className}{" "} &nbsp;
              {node.fields.days}{" "}&nbsp;
              {node.fields.grades}{" "} &nbsp;
              {/* <g.Span color="#BBB">— {node.frontmatter.date}</g.Span> */}
            </g.H3>
          </Link>
        </div> : ''
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allCommunityEducationClasses {
      totalCount
      edges {
        node {
          fields {
            className
            days
            grades
            slug
          }
        }
      }
    }
  }  
`