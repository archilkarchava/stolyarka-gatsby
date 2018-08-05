import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import TextBlock from '../components/TextBlock'
import Gallery from '../components/Gallery'
import ContactUs from '../components/ContactUs'
import Anchor from '../components/Anchor'
import Button from '../components/Button'

import Layout from '../components/layout'

const Container = styled.div`
  text-align: center;
  width: 100%;
  padding: 50px 0;
  background-color: ${props =>
    (props.primary && props.theme.primary) ||
    (props.accent && props.theme.accent) ||
    props.theme.primary
  };
`

const IndexPage = ({ data }) => (
  <Layout>
    <Header headerImage={data.headerImage.childImageSharp} />
    <Anchor id="intro" />
    <TextBlock primary>Делаем мебель красиво. Мы из России.</TextBlock>
    <Anchor id="work" />
    <Gallery imageArray={data.portfolioImages.edges.slice(0, 6)} />
    <Container primary>
      <Link to="/products/">
        <Button accent rounded>
          Посмотреть все работы
      </Button>
      </Link>
    </Container>
    <Anchor id="contactUs" />
    <ContactUs accent />
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    headerImage: file(relativePath: { regex: "/header/" }) {
      childImageSharp {
        fluid(maxWidth: 1240 quality: 80 ) {
          ...GatsbyImageSharpFluid
        }
      }
    },
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

export default IndexPage
