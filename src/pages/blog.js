import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby' 
import Seo from '../components/Seo'
const QUERY = graphql`
query {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            path
            title
          }
        }
      }
    }
  }  
`
const Blog = () => {
    const {posts} = useStaticQuery(QUERY)
    return(
        <div>
            <Seo title='Blog do PowerSites'/>
            <h1>Blog</h1>
            {posts.edges.map(post => {
                return(
                    <div>
                        <h3><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></h3>
                        <p>{post.node.frontmatter.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog