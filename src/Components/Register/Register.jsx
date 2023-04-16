import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import *as Yup from 'yup'

export default function Register() {
const[userdata,setUserdata]= useState([])
const[msgerr,setmsgerr]= useState(null)
let navigate = useNavigate();
const[loading,setLoading]=useState(false)
   async function handleregister(values){
    setLoading(true)
    let {data} =await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,values).catch((err)=>{
     setmsgerr(err.response.data.message);
    })
    if(data.message === 'success'){
      setLoading(false)
      navigate('/login');
      
    }
   
  
  }

  let validationSchema =Yup.object({
    name:Yup.string().required('name is required').min(4,'name canot less than 4 digits'),
    email:Yup.string().required('email is required').email().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,'email invalid EX: nnn50@gamil.com'),
    password:Yup.string().required('password is required').matches(/^[a-zA-Z0-9]{4,10}$/),
    rePassword:Yup.string().required('repassword is required').oneOf([Yup.ref('password')],'not matched'),
    phone:Yup.string().required('phone is required').matches(/^(002){0,1}01[0125][0-9]{8}$/,'invalid number')})
    

  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },validationSchema,onSubmit:handleregister
  })
  return <>
  <div className="container bg-main shadow w-75 m-auto mt-3">
    <h3 className='main h6 py-0'>Register</h3>
<form  onSubmit={formik.handleSubmit}>
  {msgerr?<p className="alert alert-danger">{msgerr}</p>:null}

  <label htmlFor="name">Name:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='name' id='name' value={formik.values.name} className='form-control py-0' type="text" placeholder='Enter your name '  />
{formik.errors.name&&formik.touched.name?<p className="alert alert-danger">{formik.errors.name}</p>:null}

  <label htmlFor="email">Email:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' id='email' value={formik.values.email} className='form-control py-0' type="email" placeholder='Enter your email '  />
    {formik.errors.email&&formik.touched.email?<p className="alert alert-danger">{formik.errors.email}</p>:null}


  <label htmlFor="password">Password:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' id='password' value={formik.values.password} className='form-control py-0' type="password" placeholder='Enter your password '  />
    {formik.errors.password&&formik.touched.password?<p className="alert alert-danger">{formik.errors.password}</p>:null}


  <label htmlFor="rePassword">rePassword:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='rePassword' id='rePassword' value={formik.values.rePassword} className='form-control py-0' type="password" placeholder='REtype your Password '  />
    {formik.errors.rePassword&&formik.touched.rePassword?<p className="alert alert-danger">{formik.errors.rePassword}</p>:null}


  <label htmlFor="phone">Phone:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='phone' id='phone' value={formik.values.phone} className='form-control py-0' type="tel" placeholder='Enter your phone number'  />
    {formik.errors.phone&&formik.touched.phone?<p className="alert alert-danger">{formik.errors.phone}</p>:null}
{loading?<button disabled={!(formik.dirty&&formik.isValid)} type='button' className='btn btn-success mt-2 py-0 mb-4'> <i  className='fas fa-spinner fa-spin'></i>  </button>
:<button disabled={!(formik.dirty&&formik.isValid)} type='submit' className='btn btn-success mt-2 py-0 mb-4'>register</button>
}

</form>

  
  </div>
  </>
}
