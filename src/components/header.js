import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>{siteTitle}</h1>
    <h4>
      A personal coding blog sharing my thoughts, <br />
      ideas, and lessons on software development.
    </h4>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderWrapper = styled.header`
  display: grid;
  justify-content: center;
  margin: 1rem;
  text-align: center;
`

export default Header
