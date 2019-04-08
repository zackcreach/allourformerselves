const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile {
          edges {
            node {
              relativeDirectory
              name
            }
          }
        }
        allContentfulProduct {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        // Let's start by building an array with all current pages
        // We've added '/' in contentful, so adding that in to start
        let currentPages = ['/', 'home']
        result.data.allFile.edges.filter(({ node }) => {
          if (node.relativeDirectory.includes('pages')) {
            return currentPages.push(node.name)
          }
        })
        // Now let's create pages for anything that isn't our /pages
        // directory already using indexOf() to check if it's in the array
        result.data.allContentfulPage.edges.map(({ node }) => {
          if (currentPages.indexOf(node.slug) === -1) {
            console.log(`Creating new page view: ${node.slug}`)
            createPage({
              path: `${node.slug}`,
              component: path.resolve('./src/templates/page.js'),
              context: {
                slug: node.slug,
              },
            })
          }
        })
        result.data.allContentfulProduct.edges.map(({ node }) => {
          if (currentPages.indexOf(node.slug) === -1) {
            console.log(`Creating new product view: ${node.slug}`)
            createPage({
              path: `${node.slug}`,
              component: path.resolve('./src/templates/product.js'),
              context: {
                slug: node.slug,
              },
            })
          }
        })
        result.data.allContentfulPost.edges.map(({ node }) => {
          if (currentPages.indexOf(node.slug) === -1) {
            console.log(`Creating new post view: ${node.slug}`)
            createPage({
              path: `${node.slug}`,
              component: path.resolve('./src/templates/post.js'),
              context: {
                slug: node.slug,
              },
            })
          }
        })
      })
      .catch(error => console.error(error))
    resolve()
  })
}
