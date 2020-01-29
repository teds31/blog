import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 800,
  (x - window.innerWidth / 2) / 800,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const PostCard = ({ post }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  const { excerpt } = post
  const { title, date, slug } = post.frontmatter
  const image = post.frontmatter.image.childImageSharp.fluid
  return (
    <CardWrapper>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
        className="card my-5"
      >
        <Link to={slug}>
          <Image fluid={image} />
          <div className="card-body">
            <h3 className="card-title text-center mb-3">{title}</h3>
            <p className="card-subtitle text-center light mb-3">{date}</p>
            <p className="card-text text-center mb-3">{excerpt}</p>
          </div>
        </Link>
      </animated.div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  a {
    color: black;
    text-transform: capitalize;
  }

  a:hover {
    text-decoration: none;
  }
  .card {
    background-color: #f8f9fa;
    width: 100%;
  }
`
