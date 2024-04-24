import React from 'react'
import './expenses.css'
import { Header } from '../header/header'
import { FilterSearch } from '../filter-search/FilterSearch'
import { ExpenseCard } from '../expenseCard/ExpenseCard'
export const Expense = () => {
  return (
    <div id='expenses-container'>




<Header title='Expenses'/>

<FilterSearch/>

<div id='expenses-list'>
<ExpenseCard/>

<ExpenseCard/>
<ExpenseCard/>
<ExpenseCard/>
<ExpenseCard/>
<ExpenseCard/>
<ExpenseCard/>
</div>




    </div>
  )
}
