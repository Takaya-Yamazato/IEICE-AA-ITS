import React from 'react'
import PropTypes from 'prop-types'
import { AwardsPageTemplate } from '../../templates/awards-page'

const AwardsPagePreview = ({ entry, widgetFor }) => (
  <AwardsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AwardsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AwardsPagePreview
