var React = require('react')
// var Radium = require('radium')

var Nav = require('./Nav.jsx')
var HomeTitle = require('./HomeTitle.jsx')
var HomeHero = require('./HomeHero.jsx')
var SpacerSlice = require('./SpacerSlice.jsx')

// var vars = require('./vars.js')

class FrontMatter extends React.Component {
  render() {

    var divStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      background: 'radial-gradient(circle farthest-side at right bottom,#fefdfe 5%,#f8cdda 25%,#1d2b64 80%,#0e153a 98%)',
      backgroundSize: '100% 1000px'
    }

    return (
      <div style={divStyles}> {/* 750px high */}
        <Nav height="32px"/>
        <SpacerSlice height="64px"/>
        <HomeTitle/> {/* Currently 180px high */}
        <SpacerSlice height="64px"/>
        <HomeHero/> {/* 410 px high */}
      </div>
    )
  }
}

module.exports = FrontMatter
