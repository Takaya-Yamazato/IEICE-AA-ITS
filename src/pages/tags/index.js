import React from 'react'
//import { graphql } from "gatsby"
import { kebabCase } from 'lodash'
// import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export const Head = () => (
  <>
    <title>AA-ITS|タグ</title>
    <meta name="description" content="AA-ITS特別研専委員会のタグのページです．" />
  </>
)

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      {/* <Helmet title={`Tags | ${title}`} /> */}
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <ul className="taglist">
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
