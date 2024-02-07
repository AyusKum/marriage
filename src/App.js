import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {BodyCard} from './components/BodyCard';
import './components/styles.css'
import PageWhy from './components/PageWhy';
import Ending from './components/Ending';
import { Footer } from './components/Footer';

export class App extends Component {
  render() {

    return (
      <div>
      
      <Navbar/>
       <BodyCard/>
       <PageWhy/>
       <Ending />
       <Footer/>
      </div>
    )
  }
}

export default App
