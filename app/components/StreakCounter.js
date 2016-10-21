import React from 'react'

export default class StreakCounter extends React.Component {
  render () {
    return (
      <div className='counter'>
        {this.props.currentStreak}
      </div>
    )
  }
}

StreakCounter.propTypes = {
  currentStreak: React.PropTypes.number
}
