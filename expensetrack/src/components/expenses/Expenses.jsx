import React, { useMemo, useState } from 'react'
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

const[filteredlist,setfilteredList]=useState(expenseItems);
const[filterItems,setFilterItems]=useState([]);



let dummy=[];

const checkValue=(e,item)=>{


if(e.target.checked){


  if(!dummy.includes(item)){

    dummy=[...filterItems]
    console.log('cheked')
    dummy.unshift(item)
    setFilterItems(dummy);

  }

}
else{
console.log('uncheked')
  dummy=filterItems.filter(item_=> item_!==item)

  console.log(dummy)
  setFilterItems(dummy);

}
console.log(dummy)

}



function setFilter(){
console.log('filterItems',filterItems)
  setfilteredList(expenseItems.filter((item_)=>filterItems.includes(item_.category)))
}



let categoriesBox=categoriesList.map((item)=>item.categoryName)
function Checkboxes(){

  let categoriesBox=categoriesList.map((item)=>item.categoryName)
return(
<div>
{categoriesBox.map((item)=>(<><input type="checkbox"  onClick={(e)=>checkValue(e,item)} name={item} id="" /> <label htmlFor={item}>{item}</label></> ))}

<button onClick={setFilter}>filter</button>

</div>



)



}


  return (
    <div id='expenses-container'>




<Header title='Expenses'/>

<FilterSearch/>
{/* <Checkboxes/> */}

<div id='filter-pop-up'>
{categoriesBox.map((item)=>(<><input type="checkbox"  onClick={(e)=>checkValue(e,item)} name={item} id="" /> <label htmlFor={item}>{item}</label></> ))}

<button onClick={setFilter}>filter</button>

</div>
<div id='expenses-list'>
  {filteredlist?.map((item)=><ExpenseCard item={item} />)}



</div>




    </div>
  )
}
