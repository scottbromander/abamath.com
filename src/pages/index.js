import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>  
      <h2>
        Districts
      </h2>
      {data.districts.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >

            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">— {node.frontmatter.location}</g.Span>
            </g.H3>
            <p>
              {node.excerpt}
            </p>
          </Link>
        </div>
      )}
      {data.allCommunityEducationClasses.edges.map(({ node }) =>
        node.fields && node.fields.slug ? <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >

            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.fields.className}{" "}
              {/* <g.Span color="#BBB">— {node.frontmatter.date}</g.Span> */}
            </g.H3>
            <p>
              {node.excerpt}
            </p>
          </Link>
        </div> : ''
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    blogs: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "*/blog/.*\\.md$/"}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            location
          }
          fields {
            slug
          }
          excerpt
        }
      }
    },
    classes: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "*/classes/.*\\.md$/"}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            location
          }
          fields {
            slug
          }
          excerpt
        }
      }
    },
    districts: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "*/districts/.*\\.md$/"}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            location
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
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