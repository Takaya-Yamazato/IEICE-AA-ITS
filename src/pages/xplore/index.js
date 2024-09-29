import * as React from "react";
import { Link, graphql } from "gatsby";
// import SeO from "../components/seo";
import Layout from "../../components/Layout";
import SeO from "../../components/seo";
// import BlogRoll from "../components/BlogRoll";
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";

const XplorePage = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SeO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <section className="section">
        <header>
          <title>{data.markdownRemark.frontmatter.title}</title>
          <meta name="description" content={data.markdownRemark.frontmatter.description} />
        </header>
        <div className="container content">
          <div className="columns"></div>
          <div className="column is-12">
            {data.markdownRemark.frontmatter.date}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{data.markdownRemark.frontmatter.title}</h1>
            <p>{data.markdownRemark.frontmatter.description}</p>
            <p className="blogPost">
              <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} itemProp="articleBody" />
            </p>
            <hr />
            <h1 className="has-text-weight-bold is-size-1">Updates</h1>
            <div className="columns is-multiline">
              {data.allMarkdownRemark.edges.map((edge) => (
                <div className="is-parent column is-6" key={data.markdownRemark.id}>
                  <section className="section">
                    <div className="container">
                      <div className="content">
                        <article className="blog-list-item tile is-child box notification is-featured">
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: edge.node.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${edge.node.frontmatter.title}`,
                              }}
                            />
                          </div>
                          <p className="post-meta">
                            <Link className="title has-text-primary is-size-4" to={edge.node.fields.slug}>
                              {edge.node.frontmatter.title}
                            </Link>
                            <span> &bull; </span>
                            <span className="subtitle is-size-5 is-block">{edge.node.frontmatter.date}</span>
                          </p>
                          <p>
                            {edge.node.excerpt}
                            <br />
                            <br />
                            <Link className="button" to={edge.node.fields.slug}>
                              Keep Reading →
                            </Link>
                          </p>
                        </article>
                      </div>
                    </div>
                  </section>
                </div>
              ))}
            </div>
            {/* <ul>
              {data.allMarkdownRemark.edges.map((edge) => (
                <li key={edge.node.frontmatter.title}>{edge.node.frontmatter.title}</li>
              ))}
            </ul> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default XplorePage;

export const pageQuery = graphql`
  query XploreQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "blog-post" }, title: { eq: "Migration of EB and ComEX to IEEE Xplore" } }) {
      id
      excerpt
      html
      frontmatter {
        title
        templateKey
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "xplore" } } }, sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
