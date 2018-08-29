import React from "react";
import g from "glamorous";
import Helmet from 'react-helmet'
import { rhythm } from "../utils/typography";
import logo from "../images/abamath.png";
import Footer from "../components/Footer/footer"
import Navigation from "../components/Navigation/navigation"

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
    <Navigation />
    {children()}
    <Footer 
      allOfferedClasses = {data.allOfferedClasses.edges}
      />
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    },

    allOfferedClasses: allCommunityEducationOfferedClasses {
      totalCount
      edges {
        node {
          id
          fields {
            slug,
            className
          }
        }
      }
    }
  }
`
