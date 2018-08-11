import React from 'react'
import styled from 'styled-components'

import Gallery from '../components/Gallery'

import Layout from '../components/layout'

const Container = styled.div`
  margin: 50px 0;
`

const ProductsPage = () => (
  <Layout>
    <Container>
      <Gallery />
    </Container>
  </Layout>
)

export default ProductsPage
