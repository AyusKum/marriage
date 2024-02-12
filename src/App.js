import React, {Component } from "react";
import Navbar from "./components/Navbar";
import  BodyCard from "./components/BodyCard";
import styles from "./components/styles.css";
import PageWhy from "./components/PageWhy";
import Ending from "./components/Ending";
import Footer from "./components/Footer";
import { BrowserRouter,Route,Routes} from "react-router-dom";
//import Home from "./components/Home";
import About from "./components/About";
import Photos from "./components/Photos";
import Ritual from "./components/Ritual";
import Vendor from "./components/Vendor";
import Venues from "./components/Venues";
import Videos from "./components/Videos";
import  "./App.css"
function App()  {

    return (
    
      <BrowserRouter>
      <Navbar/>
   
      <Routes>
      <Route path="/BodyCard" element={<BodyCard />} />
      <Route path="/About" element={<About />} />
      <Route path="/Photos" element={<Photos />} />
      <Route path="/Ritual" element={<Ritual />} />
      <Route path="/Vendor" element={<Vendor />} />
      <Route path="/Venues" element={<Venues />} />
      <Route path="/Videos" element={<Videos />} />
      </Routes>
      
     
      <PageWhy />
      <Ending />
      <Footer />
    
          
  </BrowserRouter>


          );
        }
      
      
      export default App;
      
     