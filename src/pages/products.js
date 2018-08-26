import React from 'react'
import styled from 'styled-components'

import Store from '../components/Store'

import Layout from '../components/layout'

const Container = styled.div`
  margin: 50px 0;
`

const ProductsPage = () => (
  <Layout>
    <Container>
      <Store />
    </Container>
  </Layout>
)

export default ProductsPage
