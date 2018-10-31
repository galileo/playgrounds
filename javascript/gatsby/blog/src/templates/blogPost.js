import React from 'react'
import {graphql, Link} from 'gatsby'

const Template = ({data, pageContext: {next, previous}}) => {
  const {html, frontmatter: {title}} = data.markdownRemark

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}}/>

      {previous && <Link to={previous.frontmatter.path}>Previous</Link>}
      {next && <Link to={next.frontmatter.path}>Next</Link>}
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark( frontmatter: { path: { eq: $pathSlug } }) {
      html 
      frontmatter {
        title
      }
    }
  }
`

export default Template
