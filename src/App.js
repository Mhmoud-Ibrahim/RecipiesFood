
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';
import Home from './Components/Home/Home';
import './App.css';

import MealContextProvider, { mealcontext } from './Context/MealContext';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Freeemeals from './Components/Freeemeals/Freeemeals';
import Gallary from './Components/Gallary/Gallary';
 let routers = createBrowserRouter([
    {path:'',element:<Layout/>, children:[
      {index:true,element:  <ProtectedRoute><Home/></ProtectedRoute>  },
      {path:'login',element:<Login  />},
      {path:'register',element:<Register/>},
      {path:'Gallary',element:<ProtectedRoute><Gallary/></ProtectedRoute> },
      {path:'freeemeals',element:<ProtectedRoute><Freeemeals/></ProtectedRoute> },
      {path:'*',element:<Notfound/>},
    ]}
 ])
function App() {
  return<MealContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    </MealContextProvider>
  

}
export default App;
