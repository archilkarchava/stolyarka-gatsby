/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve(`src/templates/product-page.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            productSpecs: file(relativePath: {eq: "products.json"}) {
              childrenProductsJson {
                productName
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog post pages.
        result.data.productSpecs.childrenProductsJson.forEach(({ productName }) => {
          createPage({
            path: `/products/${productName.replace(/ /g, '_')}`, // required
            component: productPageTemplate,
            context: {
              productName: productName
            }
          })
        })
      })
    )
  })
}