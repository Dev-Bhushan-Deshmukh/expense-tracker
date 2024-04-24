import React from 'react'
import './newexpenseform.css'
export const NewExpenseForm = () => {
  return (
    <div id='new-expense-form-container'>

<div id='form-name'>
Fill Expense Details

</div>


<div id='form-input'>

<div className='form-input-flex'>
<div className='input-name'>Title</div>
<input type="text" />

</div>
<div className='form-input-flex'>
<div className='input-name'>Date</div>
<input type="text" />

</div>
<div className='form-input-flex'>
<div className='input-name'>Expense</div>
<input type="text" />

</div>
<div className='form-input-flex'>
<div className='input-name'>Quantity</div>
<input type="text" />

</div>
<div className='form-input-flex'>
<div className='input-name'>Category</div>
<input type="text" />

</div>
<div className='form-input-decription-flex' >
<div className='input-name'>Description</div>
<textarea type="text" />

</div>



</div>


<div className="form-button-container">
<div id='inner-div'>

<button>Clear</button>
<button id='save-button'>Save</button>
</div>

</div>





    </div>
  )
}
