import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import *as Yup from 'yup'
import { mealcontext } from '../../Context/MealContext'

export default function Login() {
let {saveuserdata} = useContext(mealcontext);
const[msgerr,setmsgerr]= useState(null)
let navigate = useNavigate();
const[loading,setLoading]=useState(false)
   async function handleregister(values){
    setLoading(true)
    let {data} =await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values).catch((err)=>{
     setmsgerr(err.response.data.message);
    })
    if(data.message === 'success'){
      setLoading(false)
      console.log(data.token);
      localStorage.setItem("usertoken",data.token);
      saveuserdata()
      navigate('/');
      
    }
   
  
  }

  let validationSchema =Yup.object({
    email:Yup.string().required('email is required').email().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,'email invalid EX: nnn50@gamil.com'),
    password:Yup.string().required('password is required').matches(/^[a-zA-Z0-9]{4,10}$/),
  })
  let formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },validationSchema,onSubmit:handleregister
  })
  return <>
  <div className="container bg-main shadow w-75 m-auto mt-3">
    <h3 className='main h6 py-0'>Register</h3>
<form  onSubmit={formik.handleSubmit}>
  {msgerr?<p className="alert alert-danger">{msgerr}</p>:null}
  <label htmlFor="email">Email:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' id='email' value={formik.values.email} className='form-control py-0' type="email" placeholder='Enter your email '  />
    {formik.errors.email&&formik.touched.email?<p className="alert alert-danger">{formik.errors.email}</p>:null}
  <label htmlFor="password">Password:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' id='password' value={formik.values.password} className='form-control py-0' type="password" placeholder='Enter your password '  />
    {formik.errors.password&&formik.touched.password?<p className="alert alert-danger">{formik.errors.password}</p>:null}




 
{loading?<button disabled={!(formik.dirty&&formik.isValid)} type='button' className='btn btn-success mt-2 py-0 mb-4'> <i  className='fas fa-spinner fa-spin'></i>  </button>
:<button disabled={!(formik.dirty&&formik.isValid)} type='submit' className='btn btn-success mt-2 py-0 mb-4'>login</button>
}

</form>

  
  </div>
  </>
}
