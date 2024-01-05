import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/Navbar/Navbar'


const Root = () => {
  return (
    <div className='w-[1400px] mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Root;