import React from 'react'
import Login from './Login';
import Browse from './Browse';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../utils/firebase';
// import { useDispatch } from 'react-redux';
// import { addUser, removerUser } from '../utils/userSlice';



const Body = () => {


    const appRouter=createBrowserRouter([

        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
        
    ])


  return (
    <div>
       <RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body