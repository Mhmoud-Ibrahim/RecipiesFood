import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";

export default function Layout() {
  return <>
    <Navbar/>
  
  <Outlet></Outlet>
  <Offline ><div className="network" >  you are ofline <i className='fas fa-wifi' ></i></div> </Offline>

    <Footer/>
  
  </>
}
