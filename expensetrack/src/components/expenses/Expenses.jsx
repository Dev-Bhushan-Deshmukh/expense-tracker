import React from 'react'
import './expenses.css'
import { Header } from '../header/header'
import { FilterSearch } from '../filter-search/FilterSearch'
import { ExpenseCard } from '../expenseCard/ExpenseCard'

import { budgetContext } from '../../contexts/budgetContext'
import { useContext } from 'react'
export const Expense = () => {


  
const{category,expense}=useContext(budgetContext);

const[categoriesList,setCategories]=category
const[expenseItems,setExpenseItems]=expense

// console.log(categoriesBox)

let dummy=[];
const checkValue=(e,item)=>{


if(e.target.checked){


  dummy.unshift(item);
}
else{

  dummy=dummy.filter(item_=> item_!==item)

}
console.log(dummy)
return dummy





}
function Checkboxes(){
  let categoriesBox=categoriesList.map((item)=>item.categoryName)
return(
<div>
{categoriesBox.map((item)=>(<><input type="checkbox"  onClick={(e)=>checkValue(e,item)} name={item} id="" /> <label htmlFor={item}>{item}</label></> ))}


</div>



)



}


  return (
    <div id='expenses-container'>




<Header title='Expenses'/>

<FilterSearch/>
<Checkboxes/>
<div id='expenses-list'>
  {expenseItems.filter(checkValue).map((item)=><ExpenseCard item={item} />)}



</div>




    </div>
  )
}
