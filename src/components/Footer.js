
import React from 'react'

const Footer =()=>{





    return (
    <div>
    <div style = {{height:"100ch", color:"black", backgroundColor:"hotpink" }}>
        <h3>GET INSPRED</h3>
        <a href="#">Photos</a> <a href="#">Weddings</a> <a href="#">Blog</a>
        <hr/>
        <h3>Company</h3>
        <a href="#">Login</a>  <a href="#">FAQ</a>  <a href="#">Terms & Conditions </a>  <a href="#">Privacy Policy</a>  <a href="#">NewsRoom</a>  <a href="#">List Your Buisness</a>  <a href="#">Deals</a> <a href="#">Non-Partners</a>
        <hr/>
    </div>
    <h2 style={{color:"Green", textAlign:"center",margin:"10px"}}><b>Follow us</b></h2>
        <div style = {{height:"100vh", display:"flex",justifyContent:"center" }}>
        <a href="#" target="_blank"  style = {{height:"100px",width:"100px", backgroundColor:"#dfe4ea",borderRadius:"50px",textAlign:"center",margin:"10px",lineHeight:"110px",boxShadow:"1px 4px 2px 4px #ced6e0"}}>
        <i className="fa-brands fa-facebook fa-bounce fa-2xl"></i>
        </a>
        <a href="#" target="_blank" style = {{height:"100px",width:"100px", backgroundColor:"#dfe4ea",borderRadius:"50px",textAlign:"center",margin:"10px",lineHeight:"110px",boxShadow:"1px 4px 2px 4px #ced6e0"}}>
        <i style={{color:"#f368e0"}}className="fa-brands fa-instagram fa-bounce fa-2xl"></i>
        </a>
        <a href="#" target="_blank" style = {{height:"100px",width:"100px", backgroundColor:"#dfe4ea",borderRadius:"50px",textAlign:"center",margin:"10px",lineHeight:"110px",boxShadow:"1px 4px 2px 4px #ced6e0"}}>
        <i style={{color:"red"}} className="fa-brands fa-youtube fa-bounce fa-2xl"></i>
        </a>
        <a href="#" target="_blank" style = {{height:"100px",width:"100px", backgroundColor:"#dfe4ea",borderRadius:"50px",textAlign:"center",margin:"10px",lineHeight:"110px",boxShadow:"1px 4px 2px 4px #ced6e0"}}>
        <i style={{color:"#3742fa"}}className="fa-brands fa-linkedin fa-bounce fa-2xl"></i>
        </a>
        <a href="#" target="_blank" style = {{height:"100px",width:"100px", backgroundColor:"#dfe4ea",borderRadius:"50px",textAlign:"center",margin:"10px",lineHeight:"110px",boxShadow:"1px 4px 2px 4px #ced6e0"}}>
        <i className="fa-brands fa-twitter fa-bounce fa-2xl"></i>
        </a>
        
        </div>
       
     </div>
    );
  }


export default Footer;