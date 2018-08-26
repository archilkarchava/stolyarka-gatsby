import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import TextBlock from '../components/TextBlock'
import Store from '../components/Store'
import OurAdvantages from '../components/OurAdvantages/OurAdvantages'
import OurServices from '../components/OurServices'
import ContactUs from '../components/ContactUs'
import Button from '../components/Button'

import Layout from '../components/layout'

const StoreWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
`
const ButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 40px 0 60px 0;
`
const Main = styled.main`
  background-color: #ffffff;
  z-index: 10;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Header bgImg={data.headerBgImg.childImageSharp} />
    <Main>
      <StoreWrapper>
        <Store numberOfProductsDisplayed={9} />
        <ButtonWrapper>
          <Link to="/products/">
            <Button dark rounded>
              Посмотреть все работы
            </Button>
          </Link>
        </ButtonWrapper>
      </StoreWrapper>
      <TextBlock lightBg>Делаем мебель красиво. Мы из России.</TextBlock>
      <OurAdvantages primaryBg />
      <OurServices bgImg={data.ourServicesBgImg.childImageSharp} />
      <ContactUs darkBg />
    </Main>
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    headerBgImg: file(relativePath: { regex: "/header/" }) {
      childImageSharp {
        fluid(maxWidth: 2480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ourServicesBgImg: file(relativePath: { regex: "/sectionBg/" }) {
      childImageSharp {
        fluid(maxWidth: 2480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
