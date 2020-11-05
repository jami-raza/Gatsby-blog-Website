const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

module.exports = {
    plugins: [
        {
            resolve:`gatsby-source-contentful`,
            options:{
                spaceId:process.env.ContentFull_space_id,
                accessToken:process.env.ContentFull_accessToken
            },
        },
        `gatsby-plugin-material-ui`,
        
          
    ],
}