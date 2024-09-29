import React from 'react'
// import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'

export default function DefaultPage() {
  const data = useStaticQuery(graphql`
    query defaultPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "default-page" } }) {
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
  `)

  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {post.frontmatter.title}
                  {/* {siteTitle} */}
                </h2>
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

// DefaultPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   // contentComponent: PropTypes.func,
// }

const DefaultPageTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <DefaultPageTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

// DefaultPageTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// }
