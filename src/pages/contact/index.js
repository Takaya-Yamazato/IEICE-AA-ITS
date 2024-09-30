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
                お問い合わせ
              </h2>
              <div class="columns">
                <div class="column is-size-5">
                  <p>AA-ITS研究会へのお問い合わせは以下のGoogle Formよりお寄せください．</p>
                  <br />
                  <p><a title="AA-ITS contact google form"href="https://docs.google.com/forms/d/e/1FAIpQLSfsXtCpHGt6pd07WTV9OcY2Y3oVt7-z1Vn0IRvxzSJPDygOSQ/viewform"  target="_blank" rel="noopener noreferrer">お問い合わせフォーム</a></p>
                  <br />
                  <p>なるべく早く回答させていただくようにいたしますが，内容によってはお時間をいただく場合もあります．</p>
                  <p>予めご了承ください．</p>
                  <p>暫く経過しても回答が無い場合は，お手数ですが，再度，お問い合わせフォームからお問い合わせください．</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactUsPage
