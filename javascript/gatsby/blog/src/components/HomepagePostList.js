import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const HomepagePostLists = () => (<StaticQuery 
	query={graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							path
							data
							excerpt
						}
					}
				}
			}
		}
	`}
	render={data => <div>{data}</div>}
	/>
)

export default HomepagePostLists
