const path = require('path')

const createTagsPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js')
  const singleTagsIndexTemplate = path.resolve('src/templates/singleTagIndex.js')

  const postsByTag = {}

  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
      postsByTag
    }
  })

  tags.forEach(tag => {
    const tagPosts = postsByTag[tag]

    createPage({
      path: `/tags/${tag}`,
      component: singleTagsIndexTemplate,
      context: {
        tag: tag,
        posts: tagPosts
      }
    })
  })
}

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
                  title
                  tags
                }
              }
            }
          }
        }
        `
      ).then(res => {
        const posts = res.data.allMarkdownRemark.edges;

        createTagsPages(createPage, posts)

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
