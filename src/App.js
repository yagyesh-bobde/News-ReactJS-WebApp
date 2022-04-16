import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'

// 760eaffef38448f995a399fa3d68f886 api key for news api

export default class App extends Component {

  render() {
    document.body.style.backgroundColor = "#400101";
    return (
      <div>
        <NavBar />
        <News/>
      </div>
    )
  }
}



