import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>District</th>
          <th>Days</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Time</th>
          <th>Grades</th>
        </tr>
       {data.allCommunityEducationClasses.edges.map(({ node }) =>
         node.fields && node.fields.slug ? <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
          <tr>
          <td>
               {node.fields.className}{" "}
               </td>
          <td>
          {node.fields.district}{" "}
          </td>
          <td>
          {node.fields.days}{" "}
          </td>
          <td>
          {node.fields.startdate}{" "}
          </td>
          <td>
          {node.fields.enddate}{" "}
          </td>
          <td>
          {node.fields.time}{" "}
          </td>
          <td>
          {node.fields.grades}{" "}
          </td>
          </tr>
          </Link>
        </div> : ''
      )}
      </table>
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