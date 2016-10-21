import React from 'react'

const STREAK_TIMEOUT = 10 * 1000
const DEFAULT_ANIMATION_DURATION = 200

const FULL_BAR_STYLES = {
  WebkitTransform: 'scaleX(1)',
  transform: 'scaleX(1)',
  transition: 'none'
}

const SHRINKING_BAR_STYLES = {
  WebkitTransform: '',
  transform: '',
  transition: `all ${STREAK_TIMEOUT}ms linear`
}

export default class StreakBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {}
    }
  }

  componentWillReceiveProps () {
    this.setState(
      {style: FULL_BAR_STYLES},
      this.startAnimation
    )
  }

  render () {
    return <div className='bar' style={this.state.style} />
  }

  startAnimation () {
    setTimeout(
      () => this.setState({style: SHRINKING_BAR_STYLES}),
      DEFAULT_ANIMATION_DURATION
    )
  }
}
