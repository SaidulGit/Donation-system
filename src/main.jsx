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
import Details from './components/Cards/Details';

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
        element : <Donation></Donation>,
        loader : ()=> fetch('/Data.json')
        
      },
      {
        path : '/statistics',
        loader: () => fetch('/Data.json'),
        element : <Statistics></Statistics>

      },
      {
        path: '/user/:id',
        loader: async ({params}) => {
          try{
            const response = await fetch(`/Data.json`);
            if(!response.ok){
              throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            const users = data.find(user => parseInt(user.id) === parseInt(params.id))
            // const users = data.find(user => user.id === params.id)
            return users;
          }catch (error){
            console.error('Error fetching data',error)
            throw error;
          }
        } , 
        element: <Details></Details>
        
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
