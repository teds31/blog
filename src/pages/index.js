import React from "react"
import "../components/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PostList } from "../components/PostLIst"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
            author
          }
          excerpt
        }
      }
    }
  }
`

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
      <PostList posts={posts} />
    </Layout>
  )
}
