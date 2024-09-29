import * as React from 'react'
// import { graphql } from "gatsby"
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('../img/home-jumbotron.webp')`,
            // backgroundImage: `url('img/home-jumbotron.jpg')`, // これはダメ
            // backgroundImage: {data.markdownRemark.image},
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
            News and Updates
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
