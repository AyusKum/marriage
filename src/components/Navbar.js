import React, { Component } from 'react'
import './styles.css'

export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg  bg-light bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="/"><span  style={{color:"orange"}}>V</span>
    <span  style={{color:"orange"}}>I</span>
    <span  style={{color:"white"}}>VA</span>
    <span style={{color:"green"}}>AH</span>
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mS-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link mx-4" href="/"  style={{color:"white"}} >HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/"  style={{color:"white"}} >ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/"  style={{color:"white"}} >PHOTOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/"  style={{color:"white"}} >RITUAL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/"  style={{color:"white"}} >VENDOR</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/"  style={{color:"white"}} >VENUES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/"  style={{color:"white"}} >VIDEOS</a>
        </li>
      </ul>
      </div>
      <form className="d-flex">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" style={{color:"white"}} type="submit"><i className="fa fa-search"></i></button>
      </form>   
  </div>
</nav>
      </>
    );
  }
}
  
export default Navbar;
