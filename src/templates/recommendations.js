import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SeO from '../components/seo'
// import Content, { HTMLContent } from '../../components/Content'

const Recommendation = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const PostContent = Content
  return (
    <Layout location={location} title={siteTitle}>
      <SeO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {post.frontmatter.title}
                </h2>
                <h5>{post.frontmatter.date}</h5>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Recommendation

export const query = graphql`
  query RecommendationQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "recommendations" } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      html
    }
  }
`
