const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

module.exports = {
    plugins: [
        {
            resolve:`gatsby-source-contentful`,
            options:{
                spaceId:`jm329ken9x4x`,
                accessToken:process.env.ContentFull_accessToken
            },
        },
        `gatsby-plugin-material-ui`
    ],
}