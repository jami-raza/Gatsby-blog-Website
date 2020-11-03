
/*exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: { 
            
            name: "Jami",
            desc:"This is first dynamic page on gatsby"
         },
    });
    console.log("End of Gatsby Node File");
}

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // Only update the `/app` page.
    if (page.path.match(/^\/product/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/product/*"
  
      // Update the page.
      createPage(page)
    }
  }*/
  var path = require('path');
  exports.createPages = async ({actions,graphql}) => {
    const {createPage} = actions;

    const result = await graphql(`
      {
        allContentfulBlogPost {
          nodes {
            author
            date
            heading
            image {
              fluid {
                src
              }
              description
            }
            content {
              json
            }
          }
        }
      }
    
    `)
    console.log(JSON.stringify(result));
    
    result.data.allContentfulBlogPost.nodes.forEach((obj)=>{
      createPage({
        path: `/blog/${obj.heading}`,
        component: path.resolve('./src/templates/blog.tsx'),
        context: {
          blogDetails: obj
        }
      })
    })
  }