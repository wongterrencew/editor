import React from 'react'
import classnames from 'classnames'

const ANIMATION_CLASS = 'bump'
const DEFAULT_ANIMATION_DURATION = 200

export default class StreakCounter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shouldAnimate: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentStreak !== this.props.currentStreak) {
      this.setState(
        {shouldAnimate: true},
        this.stopAnimation
      )
    }
  }

  render () {
    const classes = classnames(
      'counter',
      { [ANIMATION_CLASS]: this.state.shouldAnimate }
    )
    return (
      <div className={classes} ref='counter'>
        {this.props.currentStreak}
      </div>
    )
  }

  stopAnimation () {
    setTimeout(
      () => this.setState({shouldAnimate: false}),
      DEFAULT_ANIMATION_DURATION
    )
  }

}

StreakCounter.propTypes = {
  currentStreak: React.PropTypes.number
}
