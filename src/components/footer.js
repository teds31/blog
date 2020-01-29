import React from "react"
import styled from "styled-components"
import Pizza from "../images/pizza.svg"
import Mdx from "../images/mdx.svg"
import Gatsby from "../images/gatsby-icon.png"

export const Footer = () => {
  return (
    <FooterWrapper>
      {" "}
      <div className="container">
        <div className="row justify-content-between d-flex align-items-center">
          <div className="col-lg-6 mr-auto">
            <p>
              © {new Date().getFullYear()} Built with{" "}
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gatsby} alt="gatsbyjs" />
              </a>{" "}
              +{" "}
              <a
                href="http://www.mdxjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Mdx} alt="mdxjs" />
              </a>{" "}
              + <img src={Pizza} alt="pizza" />
            </p>
          </div>
          <div className="col-lg-6 ml-auto">
            <p>GitHub, LinkedIn, Twitter, DevTo, HashNode, Medium </p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  font-size: 18px;
  letter-spacing: 1.5px;
  font-weight: bold;
  img {
    background: transparent;
    height: 25px;
  }
`
