import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { injectGlobal, ThemeProvider } from 'styled-components'

import Navbar, { NavHeight, mobileNavHeight } from './Navbar'
import Footer from './Footer'

import media from './media'

injectGlobal`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  header, section, footer, aside, nav, main, article, figure {
    display: block; 
  }
  html {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    width: 100%;
  }
  main {
    min-height: calc(100vh - 150px - ${NavHeight});
    ${media.tablet`
      min-height: calc(100vh - 150px - ${mobileNavHeight});
    `}
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
  h1 {
    line-height: 1.23;
    font-size: 46px;
    font-weight: 600;
  }
  h2 {
    line-height: 1.35;
    font-size: 24px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: black;
  }
`

const theme = {
  primary: '#fff',
  secondary: '#f0f0f0',
  brandBlack: '#181818',
  fontSans: '\'Montserrat\', sans-serif',
  baseFontFamily: '\'Montserrat\', sans-serif',
  baseFontColor: '#000',
  baseFontSize: '16px',
  fontNormal: 400,
  fontSemibold: 600,
  fontBold: 700,
  baseLineHeight: 1.5,
};

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700&amp;subset=cyrillic" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&amp;subset=cyrillic" rel="stylesheet" />
          </Helmet>
          <Navbar title={data.site.siteMetadata.title} phoneNumber={'+7 (900) 000-00-00'} />
          <main>
            {children}
          </main>
          <Footer>© Все права защищены. ООО "Столярка".</Footer>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout