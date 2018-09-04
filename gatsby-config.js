module.exports = {
    siteMetadata: {
        title: `abamath | coding, video game, and website design classes`,
        siteUrl: `https://www.abamath.com`,
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
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                'Jura'
              ]
            }
          },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                typePrefix: 'community_education__',
                url: `https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/ogwtdyp/public/basic?hl=en_US&alt=json`,
                method: 'get',
                name: `district_classes`,
                entityLevel: `feed.entry`,
                schemaType: {},
                localSave: false,
                path: `${__dirname}/api/`,
                verbose: true,
            }
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                typePrefix: 'community_education__',
                url: `https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/oy3lbcl/public/basic?hl=en_US&alt=json`,
                method: 'get',
                name: `offered_classes`,
                entityLevel: `feed.entry`,
                schemaType: {},
                localSave: false,
                path: `${__dirname}/api/`,
                verbose: true,
            }
        },
        {
          resolve: `gatsby-plugin-sitemap`
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                typePrefix: 'community_education__',
                url: `https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/o6w2e81/public/basic?hl=en_US&alt=json`,
                method: 'get',
                name: `district`,
                entityLevel: `feed.entry`,
                schemaType: {},
                localSave: false,
                path: `${__dirname}/api/`,
                verbose: true,
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
            name: "Abamath",
            short_name: "Abamath",
            start_url: "/",
            background_color: "#1db1ed",
            theme_color: "#fc0d1b",
            display: "minimal-ui",
            icon: "src/images/abamath.png",
            },
        },
        `gatsby-plugin-offline`,
    ],
};