import React from 'react'
  import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const Head = () => (
  <>
    <title>AA-ITS|専門委員会</title>
    <meta name="description" content="AA-ITS特別研専委員会のページです．" />
  </>
)

export default function CommitteePage() {
  const data = useStaticQuery(graphql`
    query committeePageQuery {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { templateKey: { eq: "committee-page" } }) {
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
                </h2>
                <h3>{post.frontmatter.description}</h3>
                <br />
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

const CommitteePageTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <CommitteePageTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

// CommitteePageTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// }
