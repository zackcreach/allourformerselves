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
      }
    `)
      .then(result => {
        let currentProducts = ['/']
        result.data.allFile.edges.filter(({ node }) => {
          if (node.relativeDirectory.includes('product')) {
            return currentProducts.push(node.name)
          }
        })
        result.data.allContentfulProduct.edges.map(({ node }) => {
          if (currentProducts.indexOf(node.slug) === -1) {
            console.log(`Creating new product page: ${node.slug}`)
            createPage({
              path: `${node.slug}`,
              component: path.resolve('./src/templates/product.js'),
              context: {
                slug: node.slug,
              },
            })
          }
        })
        // result.data.allContentfulPage.edges.map(({ node }) => {
        //   if (currentProducts.indexOf(node.slug) === -1) {
        //     console.log(`Creating new static page: ${node.slug}`)
        //     createPage({
        //       path: `${node.slug}`,
        //       component: path.resolve('./src/templates/page.js'),
        //       context: {
        //         slug: node.slug,
        //       },
        //     })
        //   }
        // })
      })
      .catch(error => console.error(error))
    resolve()
  })
}
