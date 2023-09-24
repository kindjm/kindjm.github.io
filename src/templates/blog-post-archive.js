import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  const categories = data.allWpCategory.edges;

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />

      <div className="primary">
      <div className="content-box clearfix">
          {posts.map(post => {
            const featuredImage = {
              data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
              alt: post.featuredImage?.node?.alt || ``,
            }            
            return (
              <article key={parse(post.id)} className="post">
                <div className="list_content">
                  <div className="li-img">
                    {featuredImage?.data && (
                        <Link to={post.uri} >
                          <GatsbyImage
                            image={featuredImage.data}
                            alt={featuredImage.alt}
                            className="page-image"   
                          />
                        </Link>
                    )}
                  </div>
                  <div className="li-text">
                    <h6 className="post-title">
                      <Link to={post.uri}>{parse(post.title)}</Link>
                    </h6>
                    <section itemProp="description">{parse(post.excerpt)}</section>
                  </div>
                </div>
              </article>
            )
          })}      
        </div>
        <br />
      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
      </div>
      <div className="secondary">
      <h5>Category</h5>
      <ul>
        {categories.map(list=>(
          <li key={parse(list.node.id)} ><Link  to={`/category/${list.node.slug}`} className="category-text">{list.node.name}</Link></li>
        ))}
      </ul> 
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: {date: DESC}
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        id
        excerpt
        uri
        date(formatString: "MM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    allWpCategory {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
