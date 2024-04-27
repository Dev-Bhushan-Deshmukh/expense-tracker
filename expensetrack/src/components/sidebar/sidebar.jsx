import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
export const Sidebar = () => {

  const[activeTab,setActiveTab]=useState('budget')
  return (
    <div id='sidebar-container'>

<div id='logo-container'></div>
<div id='link-wrapper'>
<Link to='/home/budget' style={{background:activeTab=='budget'&&'#FF8A00'}}  onClick={()=>setActiveTab('budget')} className='link-box'>

  Budget
</Link>

<Link to='/home/newexpense' style={{background:activeTab=='newexpense'&&'#FF8A00'}}   onClick={()=>setActiveTab('newexpense')} className='link-box'>
New Expense

</Link>


<Link to='/home/expenses' style={{background:activeTab=='expenses'&&'#FF8A00'}} onClick={()=>setActiveTab('expenses')}  className='link-box'>
Expenses


</Link>


<Link to='/home/dashboard' style={{background:activeTab=='dashboard'&&'#FF8A00'}}  onClick={()=>setActiveTab('dashboard')} className='link-box'>
Dashboard
</Link>

</div>
    </div>
  )
}
