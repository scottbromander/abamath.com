import React from "react";
import Img from "gatsby-image";
import ClassTable from "../components/ClassTable";
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
          <div id="about">
            <h2>ABOUT / FAQ</h2>
            <h3>Who are you?</h3>
            <p>We are a group of highly energetic software developers, college 
            students, and engineers passionate about fostering the next 
            generation of problem solvers to be the super heroes of tomorrow.</p>
            <h3>What do you do?</h3>
            <p>We do for coding what little league does for baseball. 
              We run epic coding, video game, and website design classes through partnerships 
              with community education programs in Minnesota with all of 
              the excitement of a sport.</p>
              <h3>I love working with kids and STEM! Can I help you?</h3>
              <p> Probably! Even when we don't have openings, we're always 
              looking to get in touch with potential future instructors for
              our coding classes! Tell us about yourself <Link to="/application/">here</Link>!</p>
              <h3>Why aren't you in my town yet?</h3>
              <p>We had to start somewhere. We're from the southwest metro, 
              so we started there. We're currently expanding like crazy 
              in Minnesota. If you want us in your town, get in touch and
              let us know!</p>
          </div>
          <img src={KidsImg} />
          <div id="contact">
            <h2>CONTACT</h2>
            <p>Want to bring abamath to your school, find out what we're doing next, or just say hi?</p>
            <p><OutboundLink href="mailto:info@abamath.com">info@abamath.com</OutboundLink></p>
          </div>
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