import React, { useRef, useState } from 'react'
import './budget.css'
import { budgetContext } from '../../contexts/budgetContext'
import { useContext } from 'react'
export const Budget = () => {


const{category,expense}=useContext(budgetContext);

const[categoriesList,setCategories]=category
const[expenseItems,setExpenseItems]=expense
console.log(expenseItems,'dd')

const[balance,setBalance]=useState(12000)
const[avilableBalance,setAvailableBalance]=useState(12000)
const[categoryName,setCategoryName]=useState();
const[categoryBudget,setCategoryBudget]=useState();
// const[categoriesList,setCategories]=useState([]);
const[updateCatItem,setupdateCatItem]=useState()
const[sign,setSign]=useState();
const[tempValue,setTempValue]=useState();
const[indexValue,setIndex]=useState(0);
let inputRef=useRef()




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
console.log(index)
  let itemToUpdate=categoriesList[index];
  // itemToUpdate['index']=index
  setupdateCatItem(itemToUpdate);

console.log(updateCatItem)

}

function updateCategoryChanges(objectKey,event){
  console.log(event.target.value);

  setupdateCatItem((prev)=>({...prev,[objectKey]:event.target.value}))

}


function calculateChange(sign){
if(sign=='+' && inputRef.current.value){
console.log(parseInt(updateCatItem.available)+ parseInt(inputRef.current.value))
let updatedBalance=parseInt(updateCatItem.available)+parseInt(inputRef.current.value)
  setupdateCatItem((prev)=>({...prev,['available']:updatedBalance}))



}
else if(sign=='-' && inputRef.current.value){
  console.log(updateCatItem.available-parseInt(inputRef.current.value))
  let updatedBalance=parseInt(updateCatItem.available)-parseInt(inputRef.current.value)
  setupdateCatItem((prev)=>({...prev,['available']:updatedBalance}))

    // setupdateCatItem((prev)=>({...prev,['available']:event.target.value}))
  
  
  
  }

}

function finalUpdate(index){
console.log(index)
let catagoryList=[...categoriesList]

console.log( 'old data',catagoryList[index]);
console.log( 'form updated data',updateCatItem);



let oldData=catagoryList[index];

oldData.categoryName=updateCatItem.categoryName;
oldData.categoryBudget=updateCatItem.available;
oldData.available=parseInt(updateCatItem.available)-parseInt(updateCatItem.spent);

console.log('updated old data',oldData)
catagoryList[index]=oldData;
setCategories(catagoryList);

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

Budget: <input type="text" value={balance} />


</div>
<div className='budget-number'>

Available: <input type="text" value={avilableBalance} />

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

{/* <div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>
<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>
<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>
<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>
<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>


<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>
<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>
<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div>
<div className="category-item">

<div className="cat-placeholder">Groscery</div>
<div className="cat-placeholder">1200</div>
<div className="cat-placeholder">110</div>
<div className="cat-placeholder">1000</div>
<div className="cat-placeholder" id='cat-placeholder-edit'>+</div>



</div> */}





</div>
<div id='updateform'>


<div id='category-update-form'>

Category 
<input type="text" value={updateCatItem?.categoryName} onChange={()=>updateCategoryChanges('categoryName',event)}   />

<input type="text" value={updateCatItem?.categoryBudget}  />

<div><span onClick={()=>calculateChange('+')}>+</span>   <input type="text" ref={inputRef}  /> <span onClick={()=>calculateChange('-')}>-</span> </div>


<input type="text" value={updateCatItem?.available} />
<button  onClick={()=>finalUpdate(updateCatItem?.index)}>Update</button>

</div>




</div>










{/* 
<div id='updateform'>


<div id='category-update-form'>

Budget 
<input type="text" />



<div>+<input type="text" />-</div>
<input type="text" />
<button>Update</button>

</div>




</div> */}



</div>






    </div>
  )
}
