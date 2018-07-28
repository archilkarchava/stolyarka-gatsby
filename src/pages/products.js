import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Gallery from '../components/Gallery'

import Layout from '../components/layout'

const Container = styled.div`
  margin: 50px 0;
`

const ProductsPage = ({ data }) => (
  <Layout>
    <Container>
      <Gallery imageArray={data.portfolioImages.edges} />
    </Container>
  </Layout>
)

export const query = graphql`
  query ProductsPageQuery {
    portfolioImages: allFile(
      filter: {sourceInstanceName: {eq: "portfolio"}}
      sort: {order: ASC, fields: name}
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 392) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProductsPage
