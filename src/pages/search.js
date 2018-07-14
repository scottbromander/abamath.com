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
        if(districtClass.node && districtClass.node.fields && districtClass.node.fields[field]) {
            return alreadyFound || districtClass.node.fields[field].includes(this.state.searchText);
        } else {
            return false;
        }
    }, false);

    return doAnyFieldsMatch;
  }

  render() {
    return (
        <div>
        <table>
        <input type="text" onChange={this.updateSearchText} value={this.state.searchText}/>
        <h1>{this.state.searchText}{""}</h1>
        {this.props.data.allCommunityEducationClasses.edges.filter(this.searchFilter).map(({ node }) =>
            node.fields && node.fields.slug && node.id ? <div key={node.id}>
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
            </div> : null
        )}
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