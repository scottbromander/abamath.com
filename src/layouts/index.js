import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Helmet from 'react-helmet'
import { rhythm } from "../utils/typography";
import logo from "../images/abamath.png";
import Img from 'gatsby-image'
import "./index.css";

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
      href={logo}
    /> 
    </Helmet>
    <ul>
      <li>
        <Img resolutions={data.abamathIcon.resolutions} />
      </li>
      <li>
        <h1>abamath</h1>
      </li>
      {/* <li>
      <Link className={linkStyle} to={`/contact/`}>
        Contact 
      </Link> 
      </li>
      <li>
      <Link className={linkStyle} to={`/curriculum/`}>
        Camps 
      </Link>
      </li>
      <li>
      <Link className={linkStyle} to={`/about/`}>
        About 
      </Link>
      </li>
      <li>
      <Link className={linkStyle} to={`/`}>
        Home
      </Link> 
      </li> */}
      <li>
        <Link className={linkStyle} to={`#contact`}>
        Contact
        </Link>
      </li>
      <li>
        <Link className={linkStyle} to={`#about`}>
        About
        </Link>
      </li>
      <li>
        <Link className={linkStyle} to={`#classes`}>
        Classes
        </Link>
      </li>
    </ul>
    {children()}
    {/*<footer>
      <p>Contact information: <a href="mailto:info@abamath.com">
      info@abamath.com</a>.</p>
      <p>Social media:</p>
        <a href = "https://www.facebook.com/Abamath/">
          <Img resolutions={data.facebookIcon.resolutions} />
        </a>
        <a href = "https://twitter.com/abamathtutoring">
          <Img resolutions={data.twitterIcon.resolutions} />
        </a>
    </footer>*/}
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    abamathIcon: imageSharp(id: { regex: "/abamath.png/" }) {
      resolutions(width: 56, height: 56) {
        ...GatsbyImageSharpResolutions
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
