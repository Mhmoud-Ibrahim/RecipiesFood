import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { mealcontext } from '../../Context/MealContext';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import DocSlider from '../DocSlider/DocSlider';
import { Helmet } from 'react-helmet';
export default function Home() {

 const [meals,setMeals] = useState([]);
 const [mealon,setmealon] = useState();

 async function getmeals(values){
     let response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${values.searchmeal}`);
    
     setMeals(response.data.recipes)
     setmealon(values.searchmeal);
   }
 let formik = useFormik({
  initialValues:{
    searchmeal:'',
  },onSubmit:getmeals
})
  return <>
  <Helmet>
    <title>Home</title>
  </Helmet>
   <DocSlider/>
  <div className="container mt-0">
    <div className="row mt-0">
      <form onSubmit={formik.handleSubmit}>
<div className='d-flex justify-content-center position-relative'>
  <input value={formik.values.searchmeal} name='searchmeal' id='searchmeal'  className=' form-control w-50 mb-0 mt-0  auto' placeholder="Search by meal's name above...... " type="text" onChange={formik.handleChange} onBlur={formik.handleBlur}  />
  <button type='submit' className='  btn btn-sm '> <i className='fas fa-search  position-absolute ' ></i>  </button>
</div>
      </form>
    </div>
  </div>

<div className="container">
  <div className="row g-3  mt-2">
{meals.slice(0,12).map((meal)=><div className='col-md-3' >
  <div className="item bg-gradient text-center shadow ">
    {meal.image_url?<img className='w-100'height={150} src={meal.image_url} alt="" />:"hello"}
    
    <h1 className='h6 text-danger '>{meal.title.split(' ').slice(0,2).join(' ')}</h1>
    <Link className='btn btn-warning btn-sm py-0 ' to={meal.source_url}>Go to Recipes</Link>
  </div>
  </div>)}
  </div>
</div>
  </>
}
