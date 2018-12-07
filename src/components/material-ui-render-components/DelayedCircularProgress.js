import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

class DelayedCircularProgress extends React.Component {
  timer = null

  state = {
    showCircularProgress: false
  }

  componentDidMount () {
    this.timer = setTimeout(() => {
      this.setState({
        showCircularProgress: true,
      })
    }, 10)
  }

  render () {
    return (
      <div style={{textAlign: 'center', padding: '15px'}}>
        {this.state.showCircularProgress &&
        <CircularProgress/>}
      </div>
    )
  }
}

export default DelayedCircularProgress