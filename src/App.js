import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {BodyCard} from './components/BodyCard';
import './components/TransparentBG.css'

export class App extends Component {
  render() {
    return (
      <div>
      <Navbar className="opaque"/>
      <img src="https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c=" className="lol">
      </img>
      <BodyCard/>
      
      </div>
    )
  }
}

export default App
