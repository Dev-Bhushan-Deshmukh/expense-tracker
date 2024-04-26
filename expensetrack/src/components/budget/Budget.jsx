import React, { useRef, useState } from 'react'
import './budget.css'
import { budgetContext } from '../../contexts/budgetContext'
import { useContext } from 'react'
export const Budget = () => {


const{category,expense,budget,available}=useContext(budgetContext);

const[categoriesList,setCategories]=category
const[expenseItems,setExpenseItems]=expense
const[balance,setBalance]=budget
const[avilableBalance,setAvailableBalance]=available


let budgetRef=useRef(null);
let inputRef=useRef()
const[staggedBudgetValue,setStaggedBudgetValue]=useState();
const[staggedAvaialbleValue,setStaggedAvailableValue]=useState();
const[categoryName,setCategoryName]=useState();
const[categoryBudget,setCategoryBudget]=useState();
const[updateCatItem,setupdateCatItem]=useState()
const[tempValue,setTempValue]=useState(0);
const[indexValue,setIndex]=useState(0);
const[showBudgetForm,setShowBudgetForm]=useState(false)





function createCategory(){
  setAvailableBalance(parseInt(avilableBalance)-parseInt(categoryBudget));
let newCategory={
categoryName:categoryName,
categoryBudget:categoryBudget,
available:categoryBudget,
spent:0,
index:indexValue

}

let categoryData=[...categoriesList];
categoryData.push(newCategory);
setCategories(categoryData);
setIndex(indexValue+1);
}

function updateCategory(index){
  setShowBudgetForm(false)
console.log(index)
  let itemToUpdate=categoriesList[index];
  itemToUpdate['index']=index
  setupdateCatItem(itemToUpdate);
console.log(updateCatItem)
}

function updateCategoryChanges(objectKey,event){
 console.log(event.target.value);
 setupdateCatItem((prev)=>({...prev,[objectKey]:event.target.value}))
}


function calculateChange(sign){
if(sign=='+' && inputRef.current.value){

let x=parseInt(tempValue) +parseInt(inputRef.current.value)
  console.log(x);


  // inputRef.current.value=parseInt(inputRef.current.value)+parseInt(inputRef.current.value)
console.log(parseInt(updateCatItem.available)+ parseInt(inputRef.current.value))
let updatedBalance=parseInt(updateCatItem.available)+parseInt(inputRef.current.value)


let updatedBudget=parseInt(updateCatItem.categoryBudget)+parseInt(inputRef.current.value)
  setupdateCatItem((prev)=>({...prev,['available']:updatedBalance,['categoryBudget']:updatedBudget}))
  



setStaggedAvailableValue(parseInt(avilableBalance)-x)
setTempValue(x);

}
else if(sign=='-' && inputRef.current.value){

  let x=parseInt(tempValue)+parseInt(inputRef.current.value)
  console.log('- x',x,'temppp-',tempValue);

  console.log(updateCatItem.available-parseInt(inputRef.current.value))
  let updatedBalance=parseInt(updateCatItem.available)-parseInt(inputRef.current.value)
  
let updatedBudget=parseInt(updateCatItem.categoryBudget)-parseInt(inputRef.current.value)
  setupdateCatItem((prev)=>({...prev,['available']:updatedBalance,['categoryBudget']:updatedBudget}))
 setStaggedAvailableValue(parseInt(avilableBalance)+x)
  
setTempValue(x);
   
  }

}

function finalUpdate(index){
console.log(index)
let catagoryList=[...categoriesList]

console.log( 'old data',catagoryList[index]);
console.log( 'form updated data',updateCatItem);
let oldData=catagoryList[index];

oldData.categoryName=updateCatItem.categoryName;
oldData.categoryBudget=updateCatItem.categoryBudget;
oldData.available=parseInt(updateCatItem.categoryBudget)-parseInt(updateCatItem.spent);

console.log('updated old data',oldData)
catagoryList[index]=oldData;
setCategories(catagoryList);

setAvailableBalance(staggedAvaialbleValue);
// setBalance(staggedBudgetValue)
setTempValue(0);
}



function calculateBudget(sign){
 // console.log(budgetRef.current.value,sign)
  if(sign=='+' && budgetRef.current.value){
    console.log(budgetRef.current.value)
    // console.log(parseInt(updateCatItem.available)+ parseInt(budgetRef.current.value))
    let updatedBudget=parseInt(balance)+parseInt(budgetRef.current.value)
    setStaggedBudgetValue(updatedBudget)
    // setBalance(updatedBudget)
    setStaggedAvailableValue(parseInt(avilableBalance)+parseInt(budgetRef.current.value))
     }
    else if(sign=='-' && budgetRef.current.value){
      let updatedBudget=parseInt(balance)-parseInt(budgetRef.current.value)
      setStaggedBudgetValue(updatedBudget)
      setStaggedAvailableValue(parseInt(avilableBalance)-parseInt(budgetRef.current.value))
         
      }

}

function updateBudget(){
  
  setBalance(staggedBudgetValue);
  setAvailableBalance(staggedAvaialbleValue);
  }



  return (
    <div id='new-budget-form-container'>

<div id='budget-form-name'>
Fill Expense Details

</div>

<div id='budget-div'>
<div >

<div>

<div className='budget-number'>

Budget: {balance}<input type="text" readOnly value={balance} onClick={()=>setShowBudgetForm(true)}  />


</div>
<div className='budget-number'>

Available: <input type="text" readOnly value={avilableBalance} />

</div>


</div>



<div id='grow-div'>

<div className='budget-number'> Category: <input type="text" onChange={(e)=>setCategoryName(e.target.value)} /> Amount: <input type="text"  onChange={(e)=>setCategoryBudget(e.target.value)} /></div>
<div className='budget-number'>

<button onClick={createCategory}>Create</button>

</div>


</div>





    
</div>

</div>

<div id='store-update'>


<div id='categories'>

<h4>Category</h4>
{

categoriesList.map((item,index)=><div key={index} className="category-item">

<div className="cat-placeholder">{item.categoryName}</div>
<div className="cat-placeholder">{item.categoryBudget}</div>
<div className="cat-placeholder">{item.available}</div>
<div className="cat-placeholder">{item.spent}</div>
<div className="cat-placeholder" id='cat-placeholder-edit' onClick={()=>updateCategory(index)} >+</div>



</div>)
}




</div>


{!showBudgetForm ?<div id='updateform'>


<div id='category-update-form'>

Category 
<input type="text" value={updateCatItem?.categoryName} onChange={()=>updateCategoryChanges('categoryName',event)}   />

<input type="text" value={updateCatItem?.categoryBudget} readOnly />

<div><span onClick={()=>calculateChange('+')}>+</span>   <input type="text" ref={inputRef}  /> <span onClick={()=>calculateChange('-')}>-</span> </div>


<input type="text" value={updateCatItem?.available} readOnly />
<button  onClick={()=>finalUpdate(updateCatItem?.index)}>Update</button>

</div>




</div>:<div id='updateform'>


<div id='category-update-form'>

Budget 
<input type="text" readOnly value={balance} />



<div><span onClick={()=>calculateBudget('+')}>+.</span>   <input type="text" ref={budgetRef}  /> <span onClick={()=>calculateBudget('-')}>-</span> </div>

<input type="text" readOnly value={staggedBudgetValue} />
<button onClick={updateBudget}>Update</button>

</div>




</div> }














</div>






    </div>
  )
}
