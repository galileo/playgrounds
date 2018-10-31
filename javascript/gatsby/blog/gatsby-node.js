const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const {createPage} = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js')

    resolve(
      graphql(
        `query {
          allMarkdownRemark(sort: {
            fields:frontmatter___date
            order:DESC
          }) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
        `
      ).then(res => {
        const posts = res.data.allMarkdownRemark.edges;

        posts.forEach(({node}, index) => {
          const path = node.frontmatter.path

          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              previous: index === 0 ? null : posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node
            }
          })
        })

        // resolve()
      })
    )
  })
})
