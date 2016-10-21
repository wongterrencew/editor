import React from 'react'
import classnames from 'classnames'

const STYLE = {
  backgroundImage: 'url(assets/page.png)'
}

export default class StreakExclamations extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render () {
    const classes = classnames(
      'reference-screenshot-container',
      {active: this.state.active}
    )

    return (
      <div className={classes} onClick={() => this.onClickReference()}>
        <span>Reference</span>
        <div className='reference-screenshot' style={STYLE} />
      </div>
    )
  }

  onClickReference () {
    this.setState({active: !this.state.active})
    // @editor.focus() unless @$reference.hasClass("active")
  }
}

StreakExclamations.propTypes = {
  exclamations: React.PropTypes.arrayOf(React.PropTypes.string)
}
