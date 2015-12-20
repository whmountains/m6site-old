import React, { PropTypes } from 'react'

class SpacerSlice extends React.Component {
  static propTypes = {
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }
  render () {

    let divStyles = {
      height: this.props.height
    }

    return <div style={divStyles}></div>

  }
}

module.exports = SpacerSlice
