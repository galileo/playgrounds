import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import TitleDescription from './TitleDescription'

const Header = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					site {
						siteMetadata {
							title
							description
						}
					}
				}
			`}
			render={data => <TitleDescription data={data} />}
		/>
	)
}

export default Header
