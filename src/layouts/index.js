import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import { rhythm } from "../utils/typography";
import logo from "../images/abamath.png";
import Img from 'gatsby-image'

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={1700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
  <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
    <link
      rel="icon"
      href={withPrefix('./favicon.ico')}
    /> 
    </Helmet>
    <Link to={`/`}>
      <img 
      src={logo} 
      alt="" 
      style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
      />
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
        >
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    
    <Link className={linkStyle} to={`/contact/`}>
      Contact 
    </Link> 
    <Link className={linkStyle} to={`/curriculum/`}>
      Curriculum 
    </Link>
    <Link className={linkStyle} to={`/classes/`}>
      Classes 
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About 
    </Link>
    <Link className={linkStyle} to={`/home/`}>
      Home 
    </Link> 
    {children()}
    <footer>
      <p>Contact information: <a href="mailto:info@abamath.com">
      info@abamath.com</a>.</p>
      <p>Social media:</p>
        <a href = "https://www.facebook.com/Abamath/">
          <Img resolutions={data.facebookIcon.resolutions} />
        </a>
        <a href = "https://twitter.com/abamathtutoring">
          <Img resolutions={data.twitterIcon.resolutions} />
        </a>
    </footer>
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    facebookIcon: imageSharp(id: { regex: "/facebook.png/" }) {
      resolutions(width: 42, height: 42) {
        ...GatsbyImageSharpResolutions
      }
    }
    twitterIcon: imageSharp(id: { regex: "/twitter.png/" }) {
      resolutions(width: 42, height: 42) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`