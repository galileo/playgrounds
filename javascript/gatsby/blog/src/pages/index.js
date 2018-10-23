import React from "react"
import { graphql } from 'gatsby'
import Header from '../components/Header'

const Layout = ({data: {allMarkdownRemark: {edges}}}) => {
	return (
		<div>
			<Header />
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				fontFamily: 'avenir'
			}}>
			{edges.map(({node: {frontmatter: { title, path }}}) => <div key={path}>{title}</div>)}
			</div>
		</div>
	)
}

export const query = graphql`
	query HomepageQuery {
		allMarkdownRemark (
			sort:{
				fields: frontmatter___data 
				order: DESC
			}
		) {
			edges {
				node {
					frontmatter {
						title
						path
						data
					}
				}
			}
		}
	}
` 
export default Layout
