import React from 'react'
import './newexpense.css'
import { Header } from '../header/header'
import { NewExpenseForm } from '../NewExpenseForm/NewExpenseForm'
export const NewExpense = () => {
  return (
    <div id='new-expense-container'>


<Header title='New Expense'/>

<div id='form-container'>
<NewExpenseForm/>
</div>

    </div>
  )
}
