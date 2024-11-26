const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Add a slug field to MarkdownRemark nodes
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent); // Get the parent file node
    const slug = path.basename(fileNode.relativePath, ".md"); // Generate slug from file name

    createNodeField({
      node,
      name: "slug",
      value: slug, // Add the slug field
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for all MarkdownRemark nodes and their slugs
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors; // Throw errors if the query fails
  }

  // Generate pages for each Markdown file
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.fields.slug}`, // Use the slug in the URL
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.fields.slug, // Pass the slug to the template
      },
    });
  });
};
