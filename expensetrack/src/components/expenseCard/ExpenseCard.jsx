import React from 'react'
import './expensecard.css'
export const ExpenseCard = ({item}) => {
  return (
  

<div className='expense-card-container'>
  <div className="expense-header">
<div className="header-content" id='expense-title'>{item.title}</div>
<div className="header-content">

<div>
{item.title}

</div>

</div>



  </div>
  <div className="quantity">


<div className='parent'>

<div className='inner-div-quantity'> <b>$:</b>4000/-</div>
<div className='inner-div-quantity'> <b>Qt:</b> 20.</div>

</div>

<div className='parent'>

<div className='inner-div-quantity' id='dt'>12/09/1997</div>

</div>
  </div>
<div className='expense-description'>
<b>Description :</b>
<br />
expense-descriptionexpense-descriptionexpense-descriptionexpense-descriptionexpense-descriptionexpense-description expense-descriptionexpense-description expense-description



</div>


</div>









  )
}
