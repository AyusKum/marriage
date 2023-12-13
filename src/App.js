import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {BodyCard} from './components/BodyCard';
import './components/styles.css'

export class App extends Component {
  render() {

    return (
      <div>
      
      <Navbar/>
       <BodyCard/>
      </div>
    )
  }
}

export default App
