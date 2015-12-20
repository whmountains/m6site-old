var React = require('react')

require('./roboto.css')
require('./reset.css')

var FrontMatter    = require('./FrontMatter.jsx')
var FeaturesRibbon = require('./FeaturesRibbon.jsx')
var BodyIntro      = require('./BodyIntro.jsx')

class Container extends React.Component {
  render() {

    let containerStyles = {
      fontFamily: 'roboto'
    }

    return (
      <div style={containerStyles}>
        <FrontMatter/>
        <FeaturesRibbon/>
        <BodyIntro/>
      </div>
    )

  }
}

module.exports = Container
