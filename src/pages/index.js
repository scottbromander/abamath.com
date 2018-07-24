import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import ClassTable from "../components/ClassTable";

import { rhythm } from "../utils/typography";

<meta>We work with Community Eduaction to teach coding, video game creation, and website design camps in the Greater Twin Cities area.</meta>

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