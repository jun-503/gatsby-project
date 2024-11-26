/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/gatsby-project",
  siteMetadata: {
    title: "My Gatsby Site",
    description: "A simple site built with Gatsby",
    },
    plugins: [
      {
      resolve: "gatsby-source-filesystem",
      options: {
      name: "posts",
      path: `${__dirname}/src/posts/`,
      },
      },
      "gatsby-transformer-remark",
      ],
}
