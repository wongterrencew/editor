import React from 'react'

export default class StreakExclamations extends React.Component {
  render () {
    return (
      <div className='exclamations'>
        {this.props.exclamations.map((exclamation, index) => (
          <span className='exclamation' key={index}>{exclamation}</span>
        ))}
      </div>
    )
  }
}

StreakExclamations.propTypes = {
  exclamations: React.PropTypes.arrayOf(React.PropTypes.string)
}
