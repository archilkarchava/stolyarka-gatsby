import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import portfolioImg3 from '../images/3.jpg'

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: table;
  content: " ";
  margin: 0 auto 120px auto;
`

const ProductItem = styled.div`
  text-align: center;
  max-width: 360px;
  display: inline;
  float: left;
  margin: 20px 20px;
  width: 100%;
`

/* export const query = graphql`
  query PortfolioImageQuery {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
` */

const Portfolio = () => (
  <Wrapper>
    <ProductItem>
      <Img src="../images/1.jpg" alt=""></Img>
    </ProductItem>
    <ProductItem>
      <Img src={portfolioImg3} alt=""></Img>
    </ProductItem>
    <ProductItem>
      <Img src={portfolioImg3} alt=""></Img>
    </ProductItem>
    <ProductItem>
      <Img src={portfolioImg3} alt=""></Img>
    </ProductItem>
    <ProductItem>
      <Img src={portfolioImg3} alt=""></Img>
    </ProductItem>
    <ProductItem>
      <Img src={portfolioImg3} alt=""></Img>
    </ProductItem>
  </Wrapper>
)

export default Portfolio
