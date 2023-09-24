import React from "react";
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const CategoryIndex = ({ data }) => {
    const posts = data.allWpPost.nodes;
    const categories = data.allWpCategory.edges;

    return (
    <Layout>
    <Seo title="category" description="category" />

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

/*
        <div className="container">
            {posts.map(({ id, slug, title, excerpt }) => (
              <div key={id}>
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
                    <h4 className="blog-post-title">
                    <Link to={`/${slug}`}>{title}</Link></h4>
                      <p className="blog-post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} ></p>
            </div>
            ))}
        </div>
*/        
    )
}

export default CategoryIndex

export const GET_CATEGORY_PAGES = graphql`
query GET_CATEGORY_PAGES($slug: String!) {
  allWpPost(filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } } limit: 5) {
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
`;  

