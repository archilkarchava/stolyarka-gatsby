const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve(`src/templates/product-page.js`)
    resolve(
      graphql(
        `
          {
            productSpecs: file(relativePath: { eq: "products.yaml" }) {
              childrenProductsYaml {
                productName
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const { childrenProductsYaml: products } = result.data.productSpecs

        products.forEach(({ productName }) => {
          createPage({
            path: `/products/${productName.replace(/ /g, '_')}`, // required
            component: productPageTemplate,
            context: {
              productName,
            },
          })
        })
      })
    )
  })
}
