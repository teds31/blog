import React from "react"
import styled from "styled-components"
import { PostCard } from "./PostCard"
import { useSpring, animated } from "react-spring"

export const PostList = ({ posts }) => {
  // const AnimatedDonut = animated(Donut)
  const props = useSpring({ scroll: 100, from: { scroll: 0 } })
  return (
    <PostListWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {posts.map(({ node }, index) => {
              return (
                <animated.div style={props}>
                  <PostCard key={index} post={node} />
                </animated.div>
              )
            })}
          </div>
        </div>
      </div>
    </PostListWrapper>
  )
}

const PostListWrapper = styled.div``
