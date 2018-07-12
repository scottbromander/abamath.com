module.exports = {
    siteMetadata: {
        title: `abamath`,
    },
    plugins: [
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
    ],
};