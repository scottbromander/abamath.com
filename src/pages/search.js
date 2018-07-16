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
        searchText: event.target.value.toLowerCase(),
    });
  }

  searchFilter = districtClass => {
    const fieldsToCheck = [
      'className',
      'days',
      'grades',
      'startdate',
      'enddate',
      'district',
      'time',
    ];

    const doAnyFieldsMatch = fieldsToCheck.reduce((alreadyFound, field) => {
        if(districtClass.node && districtClass.node.fields && districtClass.node.fields[field]) {
            return alreadyFound || districtClass.node.fields[field].toLowerCase().includes(this.state.searchText);
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
        <input type="text" onChange={this.updateSearchText} value={this.state.searchText}/>
        {this.props.data.allCommunityEducationClasses.edges.filter(this.searchFilter).map(({ node }) =>
            node.fields && node.fields.slug && node.id ? <div key={node.id}>
           <tr>
              <td>
                <Link
                      to={node.fields.slug}
                      css={{ textDecoration: `none`, color: `inherit` }}
                    >
                  {node.fields.className}{" "}
                </Link>
              </td>
              <td>
                <Link
                      to={node.fields.slug}
                      css={{ textDecoration: `none`, color: `inherit` }}
                    >
                    {node.fields.district}{" "}
                </Link>
              </td>
              <td>
                <Link
                    to={node.fields.slug}
                    css={{ textDecoration: `none`, color: `inherit` }}
                  >
                  {node.fields.days}{" "}
                </Link>
              </td>
              <td>
                <Link
                      to={node.fields.slug}
                      css={{ textDecoration: `none`, color: `inherit` }}
                  >
                 {node.fields.startdate}{" "}
                </Link>
              </td>
              <td>
                <Link
                      to={node.fields.slug}
                      css={{ textDecoration: `none`, color: `inherit` }}
                  >
                  {node.fields.enddate}{" "}
                </Link>
              </td>
              <td>
                <Link
                      to={node.fields.slug}
                      css={{ textDecoration: `none`, color: `inherit` }}
                  >
                  {node.fields.time}{" "}
                </Link>
              </td>
              <td>
                <Link
                      to={node.fields.slug}
                      css={{ textDecoration: `none`, color: `inherit` }}
                  >
                  {node.fields.grades}{" "}
                </Link>
              </td>
          </tr>
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