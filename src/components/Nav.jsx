import React, { PropTypes } from 'react'
import Radium from 'radium'

import Spacer from './FlexSpacer.jsx'

class Nav extends React.Component {
  static propTypes = {
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }
  render() {

    let navContainerStyles = {
      display: 'flex',
      width: '100%',
      height: this.props.height,
      alignItems: 'flex-end',
      paddingRight: '25px'
    }
    let navItemStyles = {
      color: 'white',
      marginLeft: '15px',
      textDecoration: 'none',

      ':hover': {
        textDecoration: 'underline'
      }
    }
    let booknowStyles = {
      fontWeight: 'bold'
    }

    return (
      <div style={navContainerStyles}>
        <Spacer/>
        <a href="#" key="six" style={navItemStyles}>About Us</a>
        <a href="#" key="two" style={navItemStyles}>Activities</a>
        <a href="#" key="three" style={navItemStyles}>Accommodations</a>
        <a href="#" key="five" style={navItemStyles}>Backpacking</a>
        <a href="#" key="four" style={navItemStyles}>Travel Info</a>
        <a href="#" key="seven" style={[navItemStyles, booknowStyles]}>Book Now</a>
      </div>
    )

  }
}

module.exports = Radium(Nav)
