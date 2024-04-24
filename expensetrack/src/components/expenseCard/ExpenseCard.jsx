import React from 'react'
import './expensecard.css'
export const ExpenseCard = ({item}) => {
  return (
    <div id='expense-card-form-container'>

<div id='card-header'>



<div id='card-header-inner'>


<div id='expense-name'>
{item.title}

</div>

<div className='expense-am-qt'>
Amt.{item.expense}

</div>

<div className='expense-am-qt'>
Qt.{item.quantity}

</div>


<div className='expense-date'>
{item.date}

</div>




<div   className='expense-am-qt' id='expense-category'>
{item.category}

</div>






</div>



</div>

<div id='card-description'>

<u>Description</u>: <br />

{item.description}
</div>












    </div>
  )
}
