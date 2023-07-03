import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Layout() {
  return (
   <dev>
        <NavBar />
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <Outlet />
        </div>
   </dev>
  )
}
