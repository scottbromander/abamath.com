import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

// const fieldChecker = 

class Search extends React.Component {
  state = {
    searchText: '',
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  searchFilter = districtClass => {
    const fieldsToCheck = [
      'className',
      'days',
      'district',
      'time',
      'startdate',
      'enddate',
      'grades',
    ];

    const doAnyFieldsMatch = fieldsToCheck.reduce((alreadyFound, field) => {
      if (districtClass.node && districtClass.node.fields && districtClass.node.fields[field]) {
        return alreadyFound || districtClass.node.fields[field].toLowerCase().includes(this.state.searchText.toLowerCase());
      } else {
        return false;
      }
    }, false);

    return doAnyFieldsMatch;
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateSearchText} value={this.state.searchText} />
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
            {this.props.data.allCommunityEducationClasses.edges.filter(this.searchFilter).map(({ node }) =>
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
      </div>
    )
  }
}

export default Search;

export const query = graphql`
  query SearchQuery {
    allCommunityEducationClasses {
      totalCount
      edges {
        node {
          id
          fields {
            className
            days
            grades
            startdate
            enddate
            district
            time
            slug
          }
        }
      }
    }
  }  
` 