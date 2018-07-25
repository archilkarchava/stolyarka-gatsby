import React from 'react'
import Header from '../components/Header'
import TextBlock from '../components/TextBlock'
import Work from '../components/Work'
import ContactUs from '../components/ContactUs'
import Anchor from '../components/Anchor'

const IndexPage = props => (
  <div>
    <Header headerImage={props.data.headerImage.childImageSharp}/>
    <Anchor id="intro"/>
    <TextBlock>Делаем мебель красиво. Мы из России.</TextBlock>
    <Anchor id="work"/>
    <Work imageArray={props.data.portfolioImages.edges}/>
    <Anchor id="contactUs"/>
    <ContactUs/>
  </div>
)

export default IndexPage

export const query = graphql`
  query PageQuery {
    headerImage: file(relativePath: { regex: "/header/" }) {
      childImageSharp {
        sizes(maxWidth: 10000 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    portfolioImages: allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 528, maxHeight: 500) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`