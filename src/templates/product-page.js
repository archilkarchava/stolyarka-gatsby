import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from '../components/Img'

const productPageTemplate = ({ data }) => {
  const { node: specs } = data.productSpecs.edges[0]
  const { edges: images } = data.productImages
  return (
    <Layout>
      <>
        {images.map(image => (
          <Img key={image.node.name} style={{ width: '30%', height: '10%', position: 'relative' }} alt={specs.productName} fluid={image.node.childImageSharp.fluid} />
        ))}
        <div>
          {specs.productName}
        </div>
        <div>
          {specs.type}
        </div>
        <div>
          {specs.material}
        </div>
        <div>
          {specs.woodType}
        </div>
        <div>
          {specs.color}
        </div>
        <div>
          {specs.sizes}
        </div>
        <div>
          {specs.shortDescription}
        </div>
        <div>
          {specs.description}
        </div>
        <div>
          {specs.note}
        </div>
        <div>
          {specs.price}
        </div>
        <div>
          {specs.discount}
        </div>
        <div>
          {specs.isStocked}
        </div>
      </>
    </Layout>
  )
}

export const productPageQuery = graphql`
  query ProductPageQuery($productName: String!) {
    productImages: allFile(filter: { relativeDirectory: { eq: $productName }, }, sort: {fields: relativePath, order: ASC}) {
      edges {
        node {
          name
          childImageSharp {
            fluid (maxWidth: 784){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
    productSpecs: allProductsJson(filter:{ productName: { eq: $productName }, }) {
      edges {
        node {
          id
          productName
          type
          material
          woodType
          color
          sizes
          shortDescription
          description
          note
          price
          discount
          isStocked
        }
      }
    }

  }
`

export default productPageTemplate
