import React from 'react'

class HomeHero extends React.Component {

  render () {

    let divStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    let imgStyles = {
      borderRadius: '10px 10px 0 0'
    }

    return (
      <div style={divStyles}>
        <img src="./img/lakehdr-wide.jpg" style={imgStyles}/>
      </div>
    )

  }
}

module.exports = HomeHero
