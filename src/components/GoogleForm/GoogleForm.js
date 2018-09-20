import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../layout';

const googleForm = ({ title, iframeSourceUrl }) => (
  <StaticQuery
    query={graphql`
            query ApplicationQuery {
                site {
                        siteMetadata {
                        title
                    }
                }
            }
        `}
    render={() => (
      <Layout>
        <h1>{title}</h1>
        <iframe
          src={iframeSourceUrl}
          width="100%"
          height="2800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title={title}
        >
         Loading...
        </iframe>
        <link rel="stylesheet" href="public/css/reset.css" />
      </Layout>
    )}
  />
);

googleForm.propTypes = {
  title: PropTypes.string.isRequired,
  iframeSourceUrl: PropTypes.string.isRequired,
};

export default googleForm;
