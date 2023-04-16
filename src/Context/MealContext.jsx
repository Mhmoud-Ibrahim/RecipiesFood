import axios from "axios";
import { Formik, useFormik } from "formik";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const { createContext } = require("react");
  export let mealcontext= createContext();

  export default function MealContextProvider(props){

   const[userdata,setuserdata]= useState(null);
   
 function saveuserdata(){
 let indecodedtoken = localStorage.getItem('usertoken');
 let decodedtoken = jwtDecode(indecodedtoken);
 setuserdata(decodedtoken);
 }

  function logout(){
    setuserdata(null);
    localStorage.removeItem('usertoken');
   <Navigate to={'/login'} />
  }
  useEffect(()=>{
    if(localStorage.getItem('usertoken') !==null){
    saveuserdata();
    }
      },[]) 
    return<>
      <mealcontext.Provider value={{saveuserdata,userdata,logout}}>
{props.children}
    </mealcontext.Provider>
    </>
    
    
  
 }