import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// markup
const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home Page">
    <p>{ data.allNodeArticle.edges[0].node.title } Estoy haciendo mi primer sitio en gatsby,  segunda parte</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}
export const query = graphql`
query ArticlePage {
  allNodeArticle {
    edges {
      node {
        title
        id
        body {
          value
          format
          processed
          summary
        }
      }
    }
  }
}

`
export default IndexPage
