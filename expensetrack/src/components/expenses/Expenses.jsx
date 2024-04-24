import React from 'react'
import './expenses.css'
import { Header } from '../header/header'
import { FilterSearch } from '../filter-search/FilterSearch'
import { ExpenseCard } from '../expenseCard/ExpenseCard'

import { budgetContext } from '../../contexts/budgetContext'
import { useContext } from 'react'
export const Expense = () => {


  
const{expense}=useContext(budgetContext);

// const[categoriesList,setCategories]=category
const[expenseItems,setExpenseItems]=expense


  return (
    <div id='expenses-container'>




<Header title='Expenses'/>

<FilterSearch/>

<div id='expenses-list'>
  {expenseItems.map((item)=><ExpenseCard item={item} />)}



</div>




    </div>
  )
}
