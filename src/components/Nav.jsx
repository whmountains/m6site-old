var React = require('react')
var Radium = require('radium')

class Nav extends React.Component {
  render() {

    let navContainerStyles = {
      display: 'flex',
      width: '100%',
      height: '60px',
      alignItems: 'center',
      paddingRight: '25px'
    }
    let navSpacerStyles = {
      flexGrow: '1'
    }
    let navItemStyles = {
      color: 'white',
      marginLeft: '15px',
      textDecoration: 'none',

      ':hover': {
        textDecoration: 'underline'
      }
    }

    return (
      <div style={navContainerStyles}>
        <div style={navSpacerStyles}></div>
        <a href="#" key="one" style={navItemStyles}>Nav Item</a>
        <a href="#" key="two" style={navItemStyles}>Nav Item</a>
        <a href="#" key="three" style={navItemStyles}>Nav Item</a>
        <a href="#" key="four" style={navItemStyles}>Nav Item</a>
        <a href="#" key="five" style={navItemStyles}>Nav Item</a>
        <a href="#" key="six" style={navItemStyles}>Nav Item</a>
        <a href="#" key="seven" style={navItemStyles}>Nav Item</a>
      </div>
    )

  }
}

module.exports = Radium(Nav)
