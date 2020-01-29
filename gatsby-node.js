// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions
//   const {
//     data: {
//       allMdx: { edges: posts },
//     },
//   } = await graphql(`
//     {
//       allMdx {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   }
//   posts.forEach(({ node }) => {
//     const { slug } = node.frontmatter
//     createPage({
//       path: slug,
//       component: require.resolve("./src/templates/post-template.js"),
//       context: {
//         slug: slug,
//       },
//     })
//   })
// }

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/templates/post-template.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
