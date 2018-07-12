const classType = {
    }


module.exports = {
    siteMetadata: {
        title: `Pandas Eating Lots`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-glamor`,
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
                schemaType: classType,
                localSave: false,
                path: `${__dirname}/api/`,
                verbose: true,
            }
        }

    ],
};