var React = require('react')
var Radium = require('radium')
var Color = require('color')

var vars = require('./vars.js')

var SpacerSlice = require('./SpacerSlice.jsx')

class HomeTitle extends React.Component {

  render() {

    let containerStyles = {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center'
    }
    let h1Styles = {
      color: vars.textColor,
      fontFamily: vars.fonts,
      fontSize: '56px',
      margin: '0'
    }
    let subtitleStyles = {
      color: 'white',
      fontWeight: 'normal',
      fontSize: '25px'
    }
    let buttonRowStyles = {
      display: 'flex'
    }
    let buttonBoxStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    let buttonLabelStyles = {
      color: Color(vars.textColor)
        .darken(0.25)
        .desaturate(0.75)
        .hexString(),
      fontSize: '15px',
      marginBottom: '2px'
    }
    let buttonStyles = {
      width: '220px',
      fontSize: '18px',
      lineHeight: '1.3',
      padding: '10px 25px',
      color: '#fffdfa',
      border: 'none',
      boxShadow: '0 2px 0 0 rgba(0,0,0,0.2)',
      borderRadius: '3px',
      marginRight: '30px',
      marginLeft: '30px'
    }
    let greenButtonStyles = [buttonStyles, {
      backgroundColor: '#5f9744'
    }]
    let redButtonStyles = [buttonStyles, {
      backgroundColor: '#b94947'
    }]

    return (
      <div style={containerStyles}>

        <h1 style={h1Styles}>El Refugio</h1>

        <SpacerSlice height="8px"/>

        <div style={subtitleStyles}>
          A family-oriented vacation destination located on Lago Espolon
        </div>

        <SpacerSlice height="32px"/>

        <div style={buttonRowStyles}>
          <div style={buttonBoxStyles}>
            <label htmlFor="btn1" style={buttonLabelStyles}>
              Prefer to see rather than read?
            </label>
            <button id="btn1" style={greenButtonStyles}>
              See Pictures
            </button>
          </div>
          <div style={buttonBoxStyles}>
            <label htmlFor="btn2" style={buttonLabelStyles}>
              Ready to go?
            </label>
            <button id="btn2" style={redButtonStyles}>
              Check Availablility
            </button>
          </div>
        </div>

      </div>
    )

  }
}

module.exports = Radium(HomeTitle)
