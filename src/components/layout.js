import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Navbar from './Navigation/Navbar'
import Footer from './Footer'

import media from '../utils/media'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    ::selection {
      background: #DEB887;
    }
    ::-moz-selection {
      background: #DEB887;
    }
  }
  header, section, footer, aside, nav, main, article, figure {
    display: block; 
  }
  html {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    width: 100%;
    background-color: #FFFFFF;
  }
  .clearfix:before,
  .clearfix:after {
    content: "";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  h1 {
    line-height: 1.23;
    font-size: 50px;
    font-weight: 600;
  }
  h2 {
    line-height: 1.35;
    font-size: 24px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  .nopointer {
    pointer-events: none;
  }
  .noscroll {
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
  }
  .noscroll-mobile {
    ${media.tablet`
      height: 100vh;
      min-height: 100vh;
      overflow: hidden;
    `}
  }
`

const theme = {
  primary: '#FFFFFF',
  dark: '#000000',
  light: '#F0F0F0',
  fontSans: "'Montserrat', sans-serif",
  baseFontFamily: "'Montserrat', sans-serif",
  baseFontColor: '#000000',
  baseFontSize: '16px',
  fontNormal: 400,
  fontSemibold: 600,
  fontBold: 700,
  baseLineHeight: 1.5,
  navHeight: '80px',
  mobileNavHeight: '65px',
}

/* const Main = styled.main`
  min-height: calc(100vh - 231px);
` */

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Столярная мастерская в Челябинске.',
              },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            {/* <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700&amp;subset=cyrillic" rel="stylesheet" /> */}
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&amp;subset=cyrillic"
              rel="stylesheet"
            />
          </Helmet>
          <Navbar
            title={data.site.siteMetadata.title}
            phoneNumber={'+7 (900) 000-00-00'}
          />
          {children}
          <Footer darkBg title={data.site.siteMetadata.title} />
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
