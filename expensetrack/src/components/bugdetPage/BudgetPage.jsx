import React from 'react'
import './budgetpage.css'
import { Budget } from '../budget/Budget'
import { Header } from '../header/header'
export const BudgetPage = () => {
  return (
    <div id='budget-page-container'>
<Header title="Budget" />
<Budget/>


    </div>
  )
}
