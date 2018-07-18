import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>District</th>
          <th>Days</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Time</th>
          <th>Grades</th>
        </tr>
      </thead>
      <tbody>
        {data.allCommunityEducationClasses.edges.map(({ node }) =>
          node.fields ? <tr key={node.id}>
            <td>
              <Link to={node.fields.slug} >
                {node.fields.className}
              </Link>
            </td>
            <td>
              <Link to={node.fields.slug} >
                {node.fields.district}
              </Link>
            </td>
            <td>
              <Link to={node.fields.slug} >
                {node.fields.days}
              </Link>
            </td>
            <td>
              <Link to={node.fields.slug} >
                {node.fields.startdate}
              </Link>
            </td>
            <td>
              <Link to={node.fields.slug} >
                {node.fields.enddate}
              </Link>
            </td>
            <td>
              <Link to={node.fields.slug} >
                {node.fields.time}
              </Link>
            </td>
            <td>
              <Link to={node.fields.slug} >
                {node.fields.grades}
              </Link>
            </td>
          </tr> : ''
        )}
      </tbody>
    </table>
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
            startdate
            enddate
            district
            link
            time
            description
            slug
          }
        }
      }
    }
  }  
`