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
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url('img/home-jumbotron.webp')`,
        // backgroundImage: {data.markdownRemark.frontmatter.image},
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #004400, -0.5rem 0 0 #004400',
          backgroundColor: '#004400',
          color: 'white',
          padding: '1rem',
        }}
      >
        {data.markdownRemark.frontmatter.title}
      </h1>
      {/* <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {data.markdownRemark.frontmatter.subtitle}
        </h3>         */}
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
              {/* <Features gridItems={data.markdownRemark.frontmatter.intro.journals} /> */}

              <div className="columns is-multiline">
                <div className="column is-6">
                  <section className="section">
                    <div className="has-text-centered">
                      <div
                        style={{
                          width: '240px',
                          display: 'inline-block',
                        }}
                      >
                        <a
                          href="https://www.ieice.org/cs/jpn/EB/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Link to IEICE EB page."
                        >
                          <PreviewCompatibleImage
                            imageInfo={data.markdownRemark.frontmatter.eb.image}
                          />
                          {/* <GatsbyImage image={ebimage} style={{ borderRadius: '5px' }} alt="IEICE EB" /> */}
                        </a>
                      </div>
                    </div>
                    <p>{data.markdownRemark.frontmatter.eb.text}</p>
                    <div className="column is-12 has-text-centered">
                      <a
                        className="btn"
                        href="https://search.ieice.org/bin/index.php?category=B&amp;lang=E"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link to IEICE Transactions Online EB page."
                      >
                        See latest papers
                      </a>
                    </div>
                  </section>
                </div>
                <div className="column is-6">
                  <section className="section">
                    <div className="has-text-centered">
                      <div
                        style={{
                          width: '240px',
                          display: 'inline-block',
                        }}
                      >
                        <a
                          href="https://www.ieice.org/publications/comex/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Link to IEICE ComEX page."
                        >
                          <PreviewCompatibleImage
                            imageInfo={
                              data.markdownRemark.frontmatter.comex.image
                            }
                          />
                          {/* <GatsbyImage image={comeximage} style={{ borderRadius: '5px' }} alt="IEICE ComEX" /> */}
                        </a>
                      </div>
                    </div>
                    <p>{data.markdownRemark.frontmatter.comex.text}</p>
                    <div className="column is-12 has-text-centered">
                      <a
                        className="btn"
                        href="https://www.ieice.org/publications/comex/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link to IEICE Transactions Online ComEX page."
                      >
                        See latest papers
                      </a>
                    </div>
                  </section>
                </div>
              </div>

              <div className="columns is-multiline">
                <div className="column is-6">
                  <section className="section">
                    <div className="has-text-centered">
                      <div
                        style={{
                          width: '240px',
                          display: 'inline-block',
                        }}
                      >
                        <a
                          href="https://www.ieice.org/cs/jpn/JB/index-new.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Link to IEICE JB page."
                        >
                          <PreviewCompatibleImage
                            imageInfo={data.markdownRemark.frontmatter.jb.image}
                          />
                          {/* <GatsbyImage image={jbimage} style={{ borderRadius: '5px' }} alt="IEICE JB" /> */}
                        </a>
                      </div>
                    </div>
                    <p>{data.markdownRemark.frontmatter.jb.text}</p>
                    <div className="column is-12 has-text-centered">
                      <a
                        className="btn"
                        href="https://search.ieice.org/bin/index.php?category=B&amp;lang=J"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link to IEICE Transactions Online JB page."
                      >
                        See latest papers
                      </a>
                    </div>
                  </section>
                </div>
                <div className="column is-6">
                  <section className="section">
                    <div className="has-text-centered">
                      <div
                        style={{
                          width: '240px',
                          display: 'inline-block',
                        }}
                      >
                        <a
                          href="https://www.ieice.org/~cs-edit/magazine/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Link to IEICE Communication Society Magazine page."
                        >
                          <PreviewCompatibleImage
                            imageInfo={
                              data.markdownRemark.frontmatter.bPlus.image
                            }
                          />
                          {/* <GatsbyImage image={bPlusimage} style={{ borderRadius: '5px' }} alt="IEICE bPlus" /> */}
                        </a>
                      </div>
                    </div>
                    <p>{data.markdownRemark.frontmatter.bPlus.text}</p>
                    <div className="column is-12 has-text-centered">
                      <a
                        className="btn"
                        href="https://www.ieice.org/~cs-edit/magazine/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See latest articles
                      </a>
                    </div>
                  </section>
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
        image {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
          }
        }
        heading
        description
        eb {
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
        }
        comex {
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
        }
        jb {
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
        }
        bPlus {
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
            }
          }
        }
      }
      html
    }
  }
`
