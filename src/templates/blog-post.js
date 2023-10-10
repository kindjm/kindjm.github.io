import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Utterances from '../components/Utterances'
import GoogleAdvertise from "../components/GoogleAdvertise"

const BlogPostTemplate = ({ data: { previous, next, post, category } }) => {
  const categories = category.edges;

  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <div className="primary">
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(post.title)}</h1>

          <p>{post.date}</p>

          <GoogleAdvertise
            client="ca-pub-3629499401438446"
            slot="7878905348"
            format="auto"
            responsive="true"
          />             

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!post.content && (
          <section itemProp="articleBody">{parse(post.content)}</section>
        )}

        <hr />

        <footer>

        <nav className="blog-post-nav">
          {previous && (
            <Link to={previous.uri} rel="prev">
              ← {parse(previous.title)}
            </Link>
          )}
        <br />
          {next && (
            <Link to={next.uri} rel="next">
              {parse(next.title)} →
            </Link>
          )}
      </nav>
        <br />
        <Utterances />
        </footer>
      </article>

        <GoogleAdvertise
          client="ca-pub-3629499401438446"
          slot="1176382736"
          format="autorelaxed"
          responsive="true"
        />                 
      </div>
      <div className="secondary">
        <h5>Category</h5>
        <ul>
            <li key="all"><Link  to={`/`} className="category-text">ALL</Link></li>
            {categories.map(list=>(
            <li key={parse(list.node.id)} ><Link  to={`/category/${list.node.slug}`} className="category-text">{list.node.name}</Link></li>
            ))}
        </ul> 
        </div>      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) 
  {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
    category: allWpCategory {
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
