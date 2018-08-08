import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Img from './Img'

import setTextColor from '../utils/setTextColor'

const BackgroundFilter = styled.div`
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
  background: -moz-linear-gradient(top, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
  background: -o-linear-gradient(top, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
  background: -ms-linear-gradient(top, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
  background: linear-gradient(top, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#b2000000', endColorstr='#66000000');
  position: absolute;
  z-index: 2;
  width: 100%;
  padding: 66px 0;
  height: 19px;
  font-size: 16px;
  color: ${props => props.theme.primary};
  text-align: center;
`

const BackgroundImg = styled(Img)`
  padding: 66px 0;
  height: 10px;
  bottom: 0;
  width: 100%;
  z-index: 1;
  position: absolute;
`

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  padding: 66px 0;
  height: 19px;
  font-size: 16px;
  background-color: ${props => props.theme.accent};
  color: ${props => setTextColor(props.theme.accent)};
  text-align: center;
`
const footerText = siteTitle => <p>&copy; {siteTitle} 2018. Все права защищены.</p>

const Footer = props => (
  <StaticQuery
    query={graphql`
      query FooterBackgroundImageQuery {
        footerImage: file(relativePath: { regex: "/footer/" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {props.imageBg ?
          <>
            <BackgroundFilter>
              {footerText(props.title)}
            </BackgroundFilter>
            <BackgroundImg title="Footer background image" alt="Дрова" fluid={data.footerImage.childImageSharp.fluid} />
          </> :
          <Wrapper>
            {footerText(props.title)}
          </Wrapper>
        }
      </>
    )}
  />
)


export default Footer
