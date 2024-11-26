import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const HomePage = ({ data }) => (
  <main>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
    <Helmet>
      <title>My Gatsby Site</title>
      <meta
        name="description"
        content="This is a Gatsby site optimized for SEO"
      />
      <meta property="og:title" content="My Gatsby Site" />
      <meta property="og:description" content="Optimized for SEO with Gatsby" />
    </Helmet>
  </main>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
export default HomePage
