let React = require('react')

class BodyIntro extends React.Component {
  render() {

    let containerStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#666'
    }
    let titleStyles = {
      fontSize: '65px',
      maxWidth: '815px',
      textAlign: 'center',
      fontWeight: '300'
    }
    let subStyles = {
      fontSize: '22px',
      maxWidth: '615px',
      fontWeight: '300'
    }
    let emStyles = {
      fontWeight: '700',
      fontStyle: 'italic'
    }

    return (
      <div style={containerStyles}>
        <h2 style={titleStyles}>A vacation is most enjoyable when it's satisfying</h2>
        <h3 style={subStyles}><em style={emStyles}>We don't believe that it's just about adrenaline.</em> Come here to relax with fresh air and high quality fun with your family.</h3>
      </div>
    )

  }
}

module.exports = BodyIntro
