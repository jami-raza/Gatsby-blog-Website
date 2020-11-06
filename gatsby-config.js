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
        {
            resolve: "gatsby-plugin-firebase",
            options: {
              credentials: {
                apiKey: process.env.apiKey,
                authDomain: process.env.authDomain,
                databaseURL: process.env.databaseURL,
                projectId: process.env.projectId,
                storageBucket: process.env.storageBucket,
                messagingSenderId: process.env.messagingSenderId,
                appId: process.env.appId,
              },
        },
    },
          
    ],
}