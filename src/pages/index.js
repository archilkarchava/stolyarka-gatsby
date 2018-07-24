import React from 'react'
import Header from '../components/Header'
import TextBlock from '../components/Textblock'
import ContactUs from '../components/ContactUs'
import Anchor from '../components/Anchor'

const IndexPage = props => (
  <div>
    <Header headerImage={props.data.headerImage.childImageSharp}/>
    <Anchor id="intro"/>
    <TextBlock textData="Делаем мебель красиво. Мы из России."/>
    <Anchor id="work"/>
    {/* <Portfolio/> */}
    <Anchor id="contactUs"/>
    <ContactUs/>
  </div>
)

export default IndexPage

export const query = graphql`
  query PageQuery {
    headerImage: file(relativePath: { regex: "/header/" }) {
      childImageSharp {
        sizes(maxWidth: 6000 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`