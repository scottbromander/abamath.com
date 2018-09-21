import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
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

class Index extends React.Component {
  state = {
    imageStyles: {
      width: '100%',
    },
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Img
          alt="Abamath Code Hero Background"
          resolutions={data.codeHeroBackgroundImage.childImageSharp.resolutions}
          style={this.state.imageStyles}
        />
        <center><h1>coding, video game, and website design classes</h1></center>
        <div id="body">
          <UpcomingClasses
            allCommunityEducationDistrictClasses={data.allCommunityEducationDistrictClasses.edges}
          />
          <Img
            alt="Girls Coding"
            resolutions={data.girlsImage.childImageSharp.resolutions}
            style={this.state.imageStyles}
          />
          <ClassDescriptions
            allOfferedClasses={data.allOfferedClasses.edges}
          />
          <CodeChampionship />
          <About />
          <Img
            alt="kids coding"
            resolutions={data.kidsImage.childImageSharp.resolutions}
            style={this.state.imageStyles}
          />
          <DistrictsList
            allDistricts={data.allCommunityEducationDistrict.edges}
          />
          <Contact />
          <Img
            alt="abamath collage"
            resolutions={data.collageImage.childImageSharp.resolutions}
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

const ImagePropType = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    resolutions: PropTypes.shape({}).isRequired,
  }).isRequired,
}).isRequired;

const EdgeArrayOfObjectsPropType = PropTypes.shape({
  edges: PropTypes.arrayOf(PropTypes.shape({})),
}).isRequired;

Index.propTypes = {
  data: PropTypes.shape({
    codeHeroBackgroundImage: ImagePropType,
    girlsImage: ImagePropType,
    kidsImage: ImagePropType,
    collageImage: ImagePropType,
    allCommunityEducationDistrict: EdgeArrayOfObjectsPropType,
    allCommunityEducationDistrictClasses: EdgeArrayOfObjectsPropType,
    allOfferedClasses: EdgeArrayOfObjectsPropType,
  }).isRequired,
};

export default Index;
