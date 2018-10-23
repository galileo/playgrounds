import React from 'react'

const TitleDescription = ({data: {site: {siteMetadata: {title, description}}}}) => <div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontFamily: 'avenir'
}}
>
	<h2 style={{marginBottom: 0}}>{title}</h2>
	<p style={{
		marginTop: 0,
		opacity: 0.5
	}}>{description}</p>
</div>

export default TitleDescription
