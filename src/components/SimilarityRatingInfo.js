import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../App.css'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}

class SimilarityRatingInfo extends Component {

  render () {
    return (
      <div>
        <p>Here is some document similarity rating info...</p>
        TODO: a lot
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarityRatingInfo)
