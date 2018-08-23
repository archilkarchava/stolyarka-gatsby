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
  a {
    display: inline;
    margin: 0 ${props => (!!props.spaceBetween ? props.spaceBetween : '7px')};
  }
`

const ShareLinks = props => (
  <Wrapper {...props}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://vk.com/share.php?url=${props.location.href}`}
    >
      <FontAwesomeIcon
        style={{
          color: '#45668e',
        }}
        icon={faVk}
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.facebook.com/sharer/sharer.php?u=${
        props.location.href
      }`}
    >
      <FontAwesomeIcon
        style={{
          color: '#3b5998',
        }}
        icon={faFacebookF}
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://twitter.com/intent/tweet?${props.data.productSpecs.edges[0]
        .node.description &&
        `text=${props.data.productSpecs.edges[0].node.description}&`}url=${
        props.location.href
      }`}
    >
      <FontAwesomeIcon
        style={{
          color: '#1da1f2',
        }}
        icon={faTwitter}
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.pinterest.com/pin/create/link/?${props.data
        .productSpecs.edges[0].node.description &&
        `description=${props.data.productSpecs.edges[0].node.description}&`}
          media=${props.data.productImages.edges[0].node.fullImgSharp.fluid}&
            url=${props.location.href}`}
    >
      <FontAwesomeIcon
        style={{
          color: '#bd081c',
        }}
        icon={faPinterestP}
      />
    </a>
  </Wrapper>
)

export default ShareLinks
