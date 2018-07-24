import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  html {
    font-family: Montserrat, sans-serif;
  }
  body {
    width: 100%;
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
  h1 {
    line-height: 1.23;
    font-size: 36px;
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

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&amp;subset=cyrillic" rel="stylesheet"/>
    </Helmet>
    <Navbar title={data.site.siteMetadata.title} phoneNumber={'+7 (900) 000-00-00'}/>
    {children()}
    <Footer>© Все права защищены. ООО "Столярка".</Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
