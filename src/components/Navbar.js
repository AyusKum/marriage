import React from 'react'
import './styles.css'
//import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Navbar =()=>{
  const { user,loginWithRedirect, isAuthenticated, logout } = useAuth0();
  

    return (
      <>
      <nav className="navbar navbar-expand-lg  bg-light bg-transparent">
  <div className="container-fluid">
    <span className="navbar-brand fw-bold" to="/"><span  style={{color:"orange"}}>V</span>
    <span  style={{color:"orange"}}>I</span>
    <span  style={{color:"white"}}>VA</span>
    <span style={{color:"green"}}>AH</span>
    
    </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mS-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/BodyCard"  style={{color:"white"}} >HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/About"  style={{color:"white"}} >ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/Photos"  style={{color:"white"}} >PHOTOS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/Ritual"  style={{color:"white"}} >RITUAL</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/Vendor"  style={{color:"white"}} >VENDOR</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link mx-4" to="/Venues"  style={{color:"white"}} >VENUES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-4" to="/Videos"  style={{color:"white"}} >VIDEOS</Link>
        </li>
      </ul>
      </div>
      <form className="d-flex">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" style={{color:"white"}} type="submit"><i className="fa fa-search"></i></button>
      </form>   
      <li>
      {isAuthenticated && 
        <p style={{color:"black"}}>Welcome !! {user.name}</p>}
      </li>
      {
        isAuthenticated ? <li>
        <button className="btn btn-warning" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>     
       </li>
        :
        <li>
        <button className="btn btn-dark" onClick={() => loginWithRedirect()}>Log In</button>;
        </li>
      }
      
    </div>
     </nav>
      </>
    );
  
}
  
export default Navbar;
