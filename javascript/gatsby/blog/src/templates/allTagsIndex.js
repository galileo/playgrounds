import React from 'react'
import {Link} from 'gatsby'

const AllTagsIndexTemplate = ({pageContext}) => {
  return <div>
    <ul>
      {pageContext.tags.map(tag => <li key={tag}><Link to={`tags/${tag}`}>{tag}</Link></li>)}
    </ul>
  </div>
}

export default AllTagsIndexTemplate
