import React, { useState } from 'react'
import './newexpenseform.css'
import { budgetContext } from '../../contexts/budgetContext'
import { useContext } from 'react'
export const NewExpenseForm = () => {

  
const{category,expense}=useContext(budgetContext);
const[isOpen,setisOpen]=useState(true)
const[categoriesList,setCategories]=category
const[expenseItems,setExpenseItems]=expense
 let catList=categoriesList.map((item)=>{return {cat:item.categoryName,ind:item.index} } )
//  const[expIndex,setExpIndex]=useState(0);
const[newExpense,setNewExpense]=useState({
title:'',
date:'',
expense:null,
quantity:null,
category:'',
description:'',




});


 function createExpense(id,event){

  setNewExpense((prev)=>({...prev,[id]:event.target.value}))
setisOpen(false)

 }

 function saveExpense(){
  let tempExpList=[...expenseItems];
  tempExpList.unshift(newExpense)
  setExpenseItems(tempExpList);
  // setExpIndex(expIndex+1);

  let matchItem=categoriesList.filter((item)=> item.categoryName==newExpense.category)
  matchItem=matchItem[0]
  console.log("matchItem",matchItem)
matchItem['available']=parseInt(matchItem['available'])-parseInt(newExpense['expense']);
matchItem['spent']=parseInt(matchItem['spent'])+parseInt(newExpense['expense']);

console.log(matchItem,'bvd')
}


function closeModal(){

  setisOpen(false)
  console.log('clciked')
}
  return (
    <div id='new-expense-form-container'>
{isOpen && <div className="expense-category-modal"  >
<div id='pop-up-header' onClick={closeModal}>
Category

  <span >x</span>
</div>
<div id='list'>
{catList.map((item)=><input className='category-type-item' onClick={(event)=>createExpense('category',event)}  value={item.cat} />)}

  
</div>


</div>}


<div id='form-name'>
Fill Expense Details

</div>


<div id='form-input'>

<div className='form-input-flex'>
<div className='input-name'>Title</div>
<input type="text" onChange={(event)=>createExpense('title',event)} />

</div>
<div className='form-input-flex'>
<div className='input-name'>Date</div>
<input type="date"  onChange={(event)=>createExpense('date',event)} />

</div>
<div className='form-input-flex'>
<div className='input-name'>Expense</div>
<input type="text" onChange={(event)=>createExpense('expense',event)} />

</div>
<div className='form-input-flex'>
<div className='input-name'>Quantity</div>
<input type="text"  onChange={(event)=>createExpense('quantity',event)} />

</div>
<div className='form-input-flex'>
<div className='input-name'>Category</div>
<input type="text"  value='Choose' onClick={()=>setisOpen(true)}/>

</div>
<div className='form-input-decription-flex' >
<div className='input-name'>Description</div>
<textarea type="text" onChange={(event)=>createExpense('description',event)}  />

</div>



</div>


<div className="form-button-container">
<div id='inner-div'>

<button>Clear</button>
<button id='save-button' onClick={saveExpense}>Save</button>
</div>

</div>





    </div>
  )
}
