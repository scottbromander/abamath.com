import React from "react";
import Img from "gatsby-image";
import ClassTable from "../components/ClassTable";
import About from "../components/about";
import Contact from "../components/contact";
import GirlsImg from "../images/abamath-girls-coding.jpg"
import KidsImg from "../images/abamath-robotics-team.png"
import CollageImg from "../images/abamath-collage.png"
import "./index.css";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import GatsbyLink from "gatsby-link";

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
        <div id="background"></div>
        <div id="body">
          <div id="classes">
          <h2>UPCOMING CLASSES</h2>
          <input type="text" placeholder="Search..." onChange={this.updateSearchText} value={this.state.searchText} />
          <div id="table">
          <ClassTable
            districtClasses={this.props.data.allCommunityEducationClasses.edges}
            searchText={this.state.searchText}
          />
          </div>
          </div>
          <img src={GirlsImg} />
          <About/>
          <img src={KidsImg} />
          <Contact />
          <img src={CollageImg} />
        </div>
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