# Gatsby Markdown Blog

This repository contains a blog built using [Gatsby](https://www.gatsbyjs.com/), a powerful static site generator for React. The blog dynamically generates pages from Markdown files, making it easy to manage and publish content.

---

## Features

- **Markdown Content**: Write blog posts in Markdown and see them rendered dynamically.
- **GraphQL Integration**: Query and display data efficiently with Gatsby's GraphQL.
- **Static Generation**: Pre-rendered static HTML for fast performance and SEO.
- **Dynamic Page Creation**: Automatically generates pages from Markdown files.
- **DSG (Deferred Static Generation)**: Example usage of DSG in Gatsby.

---

## Deployed Site

You can view the deployed site here:

**[Live Demo](https://fsfrahmad.github.io/gatsby-site/)**

---

## Project Structure

### Key Directories:
- **`src/posts/`**: Contains Markdown files for blog posts.
- **`src/templates/`**: Includes the template used to render blog posts (`blog-post.js`).
- **`gatsby-node.js`**: Handles dynamic page creation and adds custom fields like slugs to nodes.

### Example Markdown File
Create blog posts as `.md` files in the `src/posts/` directory:
```markdown
---
title: "Hello World"
date: "2024-11-16"
---

This is a Markdown file for our Gatsby blog.
```

------

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   gatsby develop
   ```

4. Open the site in your browser:

   ```
   http://localhost:8000
   ```

------

## Build and Deploy

1. Build the static site:

   ```
   gatsby build
   ```

2. Serve the production build locally:

   ```
   gatsby serve
   ```

3. Deploy the site (e.g., using GitHub Pages, Netlify, or Vercel).

------

## Usage

- Add New Blog Posts

  :

  - Create a new Markdown file in `src/posts/`.
  - Use frontmatter (`---`) to specify the title and date of the post.

- Access Blog Pages

  :

  - Visit `http://localhost:8000/blog/<slug>` where `<slug>` is the name of your Markdown file (without the extension).

------

## Development Workflow

1. Edit templates or Markdown files.
2. Use `gatsby develop` to preview changes.
3. Commit and push changes to your repository.

------

## Troubleshooting

- GraphQL Query Errors

  :

  - Ensure `gatsby-node.js` correctly creates slugs for your Markdown files.
  - Use GraphiQL at `http://localhost:8000/___graphql` to debug queries.

- Cache Issues

  :

  - Clear Gatsby’s cache with:

    ```
    gatsby clean
    ```

------

## Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)

- [Markdown Guide](https://www.markdownguide.org/)

- [GraphQL Documentation](https://graphql.org/)

  