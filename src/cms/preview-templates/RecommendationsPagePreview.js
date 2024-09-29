import React from 'react'
import PropTypes from 'prop-types'
import { RecommendationsPageTemplate } from '../../templates/recommendations-page'

const RecommendationsPagePreview = ({ entry, widgetFor }) => (
  <RecommendationsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

RecommendationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecommendationsPagePreview
