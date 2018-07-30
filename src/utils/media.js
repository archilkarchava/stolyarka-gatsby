import { css } from 'styled-components'

const sizes = {
  phone: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media