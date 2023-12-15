import React, { Component } from 'react'
import './styles.css'

export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
  <div className="container">
    <a className="navbar-brand fw-bold" href="/">VIV<span style={{color:"red"}}>AA</span>H</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mS-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PHOTOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">RITUAL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">VENDOR</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">VENUES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">VIDEOS</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      </>
    );
  }
}
  
export default Navbar;
