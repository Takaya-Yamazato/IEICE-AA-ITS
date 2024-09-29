import React from 'react'
// import { graphql } from "gatsby"
// import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

const ContactUsPage = () => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Contact
              </h2>
              <div class="columns">
                <div class="column is-size-5">
                  For your inquiry, please contact us via email.
                </div>
              </div>
              <div class="columns">
                <div class="column is-half">Transactions on Communications</div>
                <div class="column">trans-b (at) ieice.org</div>
              </div>
              <div class="columns">
                <div class="column is-half">Communications Express</div>
                <div class="column">comex (at) ieice.org</div>
              </div>
              <div class="columns">
                <div class="column is-half">General Inquiries</div>
                <div class="column">cs-secretariat (at) ieice.org</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactUsPage
