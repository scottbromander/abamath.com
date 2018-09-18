import React from "react";
import { StaticQuery, graphql } from "gatsby"
import Layout from '../layout';

export default ({ title, iframeSourceUrl }) => (
    < StaticQuery
        query={graphql`
            query ApplicationQuery {
                site {
                        siteMetadata {
                        title
                    }
                }
            }
        `}
        render={
            data => (
                <Layout>
                    <h1>{title}</h1>
                    <iframe
                        src={iframeSourceUrl}
                        width="100%"
                        height="2800"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        title={title}
                    >
                        Loading...
                    </iframe>
                    <link rel="stylesheet" href="public/css/reset.css" />
                </Layout>
            )
        }
    />
);