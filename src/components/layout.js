import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { injectGlobal, ThemeProvider } from 'styled-components'

import Navbar from './Navigation/Navbar'
import Footer from './Footer'

import media from '../utils/media'

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
    min-height: calc(100vh - 150px - ${props => props.theme.navHeight});
    ${media.tablet`
      min-height: calc(100vh - 150px - ${props => props.theme.mobileNavHeight});
    `}
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
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
  }
  .noscroll {
    ${media.tablet`
      height: 100vh;
      min-height: 100vh;
      overflow: hidden;
    `}
  }
`

const theme = {
  primary: '#FFFFFF',
  secondary: '#F0F0F0',
  brandBlack: '#000000',
  fontSans: '\'Montserrat\', sans-serif',
  baseFontFamily: '\'Montserrat\', sans-serif',
  baseFontSize: '16px',
  fontNormal: 400,
  fontSemibold: 600,
  fontBold: 700,
  baseLineHeight: 1.5,
  navHeight: '80px',
  mobileNavHeight: '65px'
};

class Layout extends Component {

  state = {
    noscroll: false
  }

  mobileMenuOpened = menuOpened => {
    this.setState({ noscroll: menuOpened })
  }
  render() {
    return (
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
                  { name: 'description', content: 'Столярная мастерская в Челябинске.' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
                bodyAttributes={{
                  class: this.state.noscroll ? `noscroll` : ''
                }}
              >
                {/* <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700&amp;subset=cyrillic" rel="stylesheet" /> */}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&amp;subset=cyrillic" rel="stylesheet" />
              </Helmet>
              <Navbar title={data.site.siteMetadata.title} phoneNumber={'+7 (900) 000-00-00'} menuOpened={this.mobileMenuOpened} />
              {this.props.children}
              <Footer>© Все права защищены. ООО "Столярка".</Footer>
            </>
          </ThemeProvider>
        )}
      />
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
