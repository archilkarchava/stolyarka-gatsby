import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVk,
  faFacebookF,
  faTwitter,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled.div`
  margin-top: 30px;
  height: 19px;
  * {
    height: 100%;
  }
  position: relative;
  vertical-align: middle;
  list-style: none;
  font-size: 15px;
  ${props => props.centered && 'text-align: center'};
  margin: ${props => props.margin};
  * {
    display: inline;
    margin: 0 ${props => (!!props.spaceBetween ? props.spaceBetween : '7px')};
  }
`

function openInNewWindow(url) {
  window.open(
    url,
    'newwindow',
    'width=650,height=570,scrollbars=yes,status=yes'
  )
}

const ShareLinks = props => {
  const { node: productSpecs } = props.data.productSpecs.edges[0]
  const { edges: productImages } = props.data.productImages
  const { href: currentPageUrl } = props.location
  return (
    <Wrapper {...props}>
      <FontAwesomeIcon
        style={{
          color: '#45668e',
          width: '17px',
          cursor: 'pointer',
        }}
        icon={faVk}
        onClick={() =>
          openInNewWindow(`https://vk.com/share.php?url=${currentPageUrl}`)
        }
      />
      <FontAwesomeIcon
        style={{
          color: '#3b5998',
          width: '9px',
          cursor: 'pointer',
        }}
        icon={faFacebookF}
        onClick={() =>
          openInNewWindow(
            `https://www.facebook.com/sharer/sharer.php?u=${currentPageUrl}`
          )
        }
      />
      <FontAwesomeIcon
        style={{
          color: '#1da1f2',
          width: '15px',
          cursor: 'pointer',
        }}
        icon={faTwitter}
        onClick={() =>
          openInNewWindow(
            `https://twitter.com/intent/tweet?${productSpecs.description &&
              `text=${productSpecs.description}&`}url=${currentPageUrl}`
          )
        }
      />
      {/*     <a
        style={{
          cursor: 'pointer',
        }}
        onClick={() =>
          openInNewWindow(`https://www.pinterest.com/pin/create/link/?${props.data
            .productSpecs.edges[0].node.description &&
            `description=${props.data.productSpecs.edges[0].node.description}&`}
              url=${currentPageUrl}`)
        }
      >
        <FontAwesomeIcon
          style={{
            color: '#bd081c',
            cursor: 'pointer'
          }}
          icon={faPinterestP}
        />
      </a> */}
    </Wrapper>
  )
}

export default ShareLinks
