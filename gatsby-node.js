
exports.createPages = async function ({ actions}) {

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