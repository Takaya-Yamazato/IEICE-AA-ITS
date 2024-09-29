import * as React from 'react'
// import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import SeO from '../components/seo'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const IndexPageTemplate = ({ data }) => (
  <Layout>
    <SeO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
    />
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('img/AA-ITS.jpg')`,        
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1 has-text-centered"
        style={{
          boxShadow: '0.5rem 0 0 #004400, -0.5rem 0 0 #004400',
          backgroundColor: '#004400',
          color: 'white',
          padding: '1rem',
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h1>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content">
                <div className="tile">
                  {/* <p>{data.markdownRemark.frontmatter.aboutUs}</p> */}
                </div>
                <section
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html,
                  }}
                />
              </div>

              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {data.markdownRemark.frontmatter.heading}
                  </h3>
                  <p>{data.markdownRemark.frontmatter.description}</p>
                </div>
              </div>




              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">
                  News and Updates
                </h3>
                <BlogRoll />
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/news">
                    Read more news and updates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPageTemplate

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
      pathPrefix
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        templateKey
        title
        subtitle
        heading
        description
      }
      html
    }
  }
`
