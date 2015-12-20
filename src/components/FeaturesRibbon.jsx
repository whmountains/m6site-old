import React from 'react'

//depend on font-awesome
require('../css/font-awesome.min.css')

let Feature = require('./FeaturesRibbonItem.jsx')
import Spacer from './FlexSpacer.jsx'
import vars from './vars.js'

class FeaturesRibbon extends React.Component {
  render () {

    const ribbonStyles = {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#1E8184',
      height: '256px',
      flexDirection: 'column',
      boxShadow: '0 -3px 8px 1px rgba(0,0,0,.2)'
    }
    const h2Styles = {
      color: vars.textColor,
      fontWeight: '300',
      margin: '0',
      fontSize: '39px'
    }
    const rowStyles = {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }

    return (
      <div style={ribbonStyles}>

        <Spacer/>

        <h2 style={h2Styles}>For families, by a family</h2>

        <Spacer ratio={2}/>

        <div style={rowStyles}>
            <Spacer ratio={2}/>
          <Feature caption="Gorgeous Location" faIcon="picture-o"/>
            <Spacer/>
          <Feature caption="Friendly Accommodations" faIcon="home"/>
            <Spacer/>
          <Feature caption="Lots of stuff to do" faIcon="paper-plane"/>
            <Spacer/>
          <Feature caption="Everything Included" faIcon="asterisk"/>
            <Spacer ratio={2}/>
        </div>

        <Spacer ratio={2}/>


      </div>
    )

  }
}

module.exports = FeaturesRibbon
