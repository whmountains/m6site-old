import React, { PropTypes } from 'react'
import PureRender from 'react-addons-pure-render-mixin'

class FlexSpacer extends React.Component {
  static propTypes = {
    ratio: PropTypes.number
  }
  mixins: [PureRender]
  render () {

    const ratio = this.props.ratio || 1

    const divStyles = {
      flexGrow: ratio
    }

    return (
      <div style={divStyles}/>
    )

  }
}

module.exports = FlexSpacer
