import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
export const Sidebar = () => {

  const[activeTab,setActiveTab]=useState('budget')
  return (
    <div id='sidebar-container'>

<div id='logo-container'></div>
<div id='link-wrapper'>
<Link to='/home/budget' style={{background:activeTab=='budget'&&'rgb(75 22 153)',color:activeTab=='budget'&&'white'}}  onClick={()=>setActiveTab('budget')} className='link-box'>

  Budget
</Link>

<Link to='/home/newexpense' style={{background:activeTab=='newexpense'&&'rgb(75 22 153)',color:activeTab=='newexpense'&&'white'}}   onClick={()=>setActiveTab('newexpense')} className='link-box'>
New Expense

</Link>


<Link to='/home/expenses' style={{background:activeTab=='expenses'&&'rgb(75 22 153)',color:activeTab=='expenses'&&'white'}} onClick={()=>setActiveTab('expenses')}  className='link-box'>
Expenses


</Link>


<Link to='/home/dashboard' style={{background:activeTab=='dashboard'&&'rgb(75 22 153)',color:activeTab=='dashboard'&&'white'}}  onClick={()=>setActiveTab('dashboard')} className='link-box'>
Dashboard
</Link>

</div>
    </div>
  )
}
