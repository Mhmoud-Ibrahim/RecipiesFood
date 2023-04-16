import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { mealcontext } from '../../Context/MealContext';

export default function Navbar() {
  let {userdata,logout} = useContext(mealcontext);



  return<>
  <nav className="navbar navbar-expand-lg navbar-light   py-0 shadow">
  <div className="container">
    <Link className="navbar-brand text-warning fw-bold text-danger" to="">fresh meals</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userdata !==null? <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link" to="/">home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Gallary">Gallary</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="freeemeals">Freeemeals</Link>
        </li>
      
      </ul>:null}

      
      <ul className="navbar-nav socialmedia ms-auto py-0 mt-2 mx-2 d-flex justify-content-around mb-lg-0">
      <i className='fab fa-facebook-f ' ></i>
      <i className='fab fa-twitter ' ></i>
      <i className='fab fa-tiktok ' ></i>
      <i className='fab fa-instagram ' ></i>
      <i className='fab fa-linkedin-in ' ></i>
      <i className='fab fa-youtube ' ></i>
      </ul>

     {userdata === null?<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
   <Link to={'/Login'}><button className='btn btn-outline-success btn-sm py-0 '>login</button></Link>
   <Link to={'register'}><button className='btn btn-outline-danger btn-sm py-0 mx-2 '>Register</button></Link>
   </ul>:
   <span onClick={logout}><button className='btn   btn-info btn-sm py-1 '>logout</button></span>
   }
   
   
   
    </div>
  </div>
</nav>
  </>
}
