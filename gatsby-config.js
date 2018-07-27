module.exports = {
    siteMetadata: {
        title: `abamath`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-42728234-1",
              // Puts tracking script in the head instead of the body
              head: false,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/preview/**", "/do-not-track/me/too/"],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/`,
                name: `src`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/images`,
              name: 'images',
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-glamor`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                typePrefix: 'community_education__',
                url: `https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/ogwtdyp/public/basic?hl=en_US&alt=json`,
                method: 'get',
                name: `classes`,
                entityLevel: `feed.entry`,
                schemaType: {},
                localSave: false,
                path: `${__dirname}/api/`,
                verbose: true,
            }
        }

    ],
};