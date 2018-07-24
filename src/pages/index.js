import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import ClassTable from "../components/ClassTable";

import { rhythm } from "../utils/typography";

export default class Index extends React.Component {
  state = {
    searchText: '',
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateSearchText} value={this.state.searchText} />
        <ClassTable
          districtClasses={this.props.data.allCommunityEducationClasses.edges}
          searchText={this.state.searchText}
        />
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
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