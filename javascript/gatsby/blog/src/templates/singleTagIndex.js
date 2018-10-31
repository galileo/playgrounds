import React from 'react'
import {Link} from 'gatsby'

const SingleTagsIndexTemplate = ({pageContext: {tag, posts}}) => {
  return <div>
    <h2>Posts about: '{tag}'</h2>
    {posts.map(({frontmatter: post}) => <p key={post.title}><Link to={post.path}>{post.title}</Link></p>)}
    </div>
}

export default SingleTagsIndexTemplate
