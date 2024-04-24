import React from 'react'
import './home.css'
import { Sidebar } from '../sidebar/sidebar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div id='home-container'>
<Sidebar/>
<div className="outlet-container">


<Outlet/>




</div>

    </div>
  )
}
