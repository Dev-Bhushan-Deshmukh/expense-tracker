import React, { useState } from 'react'
import './home.css'
import { Sidebar } from '../sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import { budgetContext } from '../../contexts/budgetContext'

export const Home = () => {

  const[balance,setBalance]=useState(0)
  const[avilableBalance,setAvailableBalance]=useState(0)
  const[categoriesList,setCategories]=useState([]);
  const[expenseItems,setExpenseItems]=useState([]);


  return (
    <div id='home-container'>
<Sidebar/>
<div className="outlet-container">
<budgetContext.Provider value={{category:[categoriesList,setCategories],expense:[expenseItems,setExpenseItems],budget:[balance,setBalance],available:[avilableBalance,setAvailableBalance]}}>




<Outlet/>


  
</budgetContext.Provider>

</div>

    </div>
  )
}
