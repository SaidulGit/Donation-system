import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Header/Navbar/Donation';
import Statistics from './components/Header/Navbar/Statistics/Statistics';
import Errorpage from './components/Errorpage/Errorpage';
import Ddetails from './components/DonationDetails/details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children : [
      {
        path :'/',
        element : <Home></Home>,
        loader: () => fetch('/Data.json')
      },
      {
        path : '/donation',
        element : <Donation></Donation>
        
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>,

      },{
        path: '/Details/:id',
        element: <Ddetails></Ddetails>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
