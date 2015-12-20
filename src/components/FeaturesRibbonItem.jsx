import React, { PropTypes } from 'react'
var PureRender = require('react-addons-pure-render-mixin')

//depend on font-awesome
require('../css/font-awesome.min.css')

import Vspacer from './SpacerSlice.jsx'

class FeaturesRibbonItem extends React.Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    faIcon: PropTypes.string.isRequired
  }
  static mixins = [PureRender]
  render () {

    const classString = 'fa fa-3x fa-' + this.props.faIcon
    const featureStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    const iconStyles = {
      color: 'rgba(0,0,0,.5)'
    }
    const captionStyles = {
      color: 'rgba(255,255,255,.7)',
      fontSize: '20px'
    }

    return (
      <div style={featureStyles}>
        <i className={classString} style={iconStyles}/>
        <Vspacer height={'3px'}/>
        <div style={captionStyles}>{this.props.caption}</div>
      </div>
    )

  }
}

module.exports = FeaturesRibbonItem
