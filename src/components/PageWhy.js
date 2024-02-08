
import React, { Component } from 'react'

export class PageWhy extends Component {


  render() {
    return (
    <div style = {{height:"50vh", color:"white", backgroundColor:"#7e88f2",margin:"10px",padding:"20px",fontSize:"30px"}}>
    <h1 style={{textAlign:"center"}}><b>WHY WE?</b></h1>
    <h2 style={{color:"black", textAlign:"center"}}><b>Hassle Free Bookings . Discounted Price</b></h2>
        <ul  style={{color:"white"}}>
        <li>Promotes Make In India</li>
        <li>Best Facility at Least Price</li>
        <li>Truthfullness</li>
        </ul>

      <h2 style={{textAlign:"center",color:"black"}}><i class="fa-solid fa-shake fa-phone"></i><b>  Contact Us :<i>+91 91403655XX</i></b></h2>
     </div>
    )
  }
}

export default PageWhy