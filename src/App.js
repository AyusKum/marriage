import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {BodyCard} from './components/BodyCard';
import './components/styles.css'
import Ending from './components/Ending';

export class App extends Component {
  render() {

    return (
      <div>
      
      <Navbar/>
       <BodyCard/>
       <Ending />
      </div>
    )
  }
}

export default App
