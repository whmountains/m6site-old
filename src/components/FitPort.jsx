var React  = require('react')
var radium = require('radium')

class FitPort extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    style: React.PropTypes.objectOf(React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]))
  }
  render() {

    let baseStyles = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }

    return (
      <div
        style={[
          baseStyles,
          this.props.style
        ]}
      >
      {this.props.children}
      </div>
    )
  }
}

module.exports = radium(FitPort)
