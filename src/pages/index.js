import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import UpcomingClasses from '../components/Upcoming_Classes/UpcomingClasses';
import ClassDescriptions from '../components/Class_Descriptions/class-descriptions';
import About from '../components/About/about';
import CodeChampionship from '../components/Code_Championship/code-championship';
import DistrictsList from '../components/Districts/district-list';
import Contact from '../components/Contact/contact';
import './index.css';

// eslint-disable-next-line max-len
// <meta>We work with Community Education to teach coding, video game creation, and website design camps in the Greater Twin Cities area.</meta>

export default class Index extends React.Component {
  state = {
    imageStyles: {
      width: '100%',
    },
  }

  render() {
    return (
      <Layout>
        <Img
          alt="Abamath Code Hero Background"
          resolutions={this.props.data.codeHeroBackgroundImage.childImageSharp.resolutions}
          style={{ ...this.state.imageStyles }}
        />
        <center><h1>coding, video game, and website design classes</h1></center>
        <div id="body">
          <UpcomingClasses
            allCommunityEducationDistrictClasses={this.props.data.allCommunityEducationDistrictClasses}
          />
          <Img
            alt="Girls Coding"
            resolutions={this.props.data.girlsImage.childImageSharp.resolutions}
            style={this.state.imageStyles}
          />
          <ClassDescriptions
            allOfferedClasses={this.props.data.allOfferedClasses.edges}
          />
          <CodeChampionship />
          <About />
          <Img
            alt="kids coding"
            resolutions={this.props.data.kidsImage.childImageSharp.resolutions}
            style={this.state.imageStyles}
          />
          <DistrictsList
            allDistricts={this.props.data.allCommunityEducationDistrict.edges}
          />
          <Contact />
          <Img
            alt="abamath collage"
            resolutions={this.props.data.collageImage.childImageSharp.resolutions}
            style={this.state.imageStyles}
          />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    codeHeroBackgroundImage: file(relativePath: { eq: "images/website-creation-for-kids.jpg" }) {
      childImageSharp {
        resolutions(width: 1800, height: 360) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    girlsImage: file(relativePath: { eq: "images/abamath-girls-coding.jpg" }) {
      childImageSharp {
        resolutions(width: 999, height: 240) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    kidsImage: file(relativePath: { eq: "images/abamath-robotics-team.png" }) {
      childImageSharp {
        resolutions(width: 999, height: 240) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    collageImage: file(relativePath: { eq: "images/abamath-collage.png" }) {
      childImageSharp {
        resolutions(width: 999, height: 769) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    allCommunityEducationDistrict  {
      totalCount
      edges {
        node {
          id
          fields {
            districtName
            slug
          }
        }
      }
    }
    allCommunityEducationDistrictClasses {
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
    allOfferedClasses: allCommunityEducationOfferedClasses {
      totalCount
      edges {
        node {
          id
          fields {
            slug,
            classgrades,
            classdescription,
            className,
            classshortdescription
          }
        }
      }
    }
}  
`;