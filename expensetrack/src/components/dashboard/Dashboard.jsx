// import React from 'react'
import './dashboard.css'
import { Header } from '../header/header'
import { budgetContext } from '../../contexts/budgetContext'
import { useContext } from 'react'
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';


export const Dashboard = () => {


  
const{category,expense,budget,available}=useContext(budgetContext);

const[categoriesList,setCategories]=category
const[expenseItems,setExpenseItems]=expense
const[balance,setBalance]=budget
const[avilableBalance,setAvailableBalance]=available
console.log(categoriesList,avilableBalance,balance,expenseItems)



//trial

//total expenses category wise sum
// let data__=[];
// let stagg=[];
// for (let i of expenseItems)
// {
//    if(stagg.indexOf(i.category)==-1)
//     {
//            stagg.push(i.category) 
//         let object_={
//             category:i.category,
//             expenseTotal:i.expense
            
//         }
//         data__.push(object_)
//     }
//     else
//     {
//         let ind=stagg.indexOf(i.category);
//         data__[ind].expenseTotal=parseInt(data__[ind].expenseTotal)+parseInt(i.expense)
        
//     }

// }

// console.log(stagg,data__)



//total number of expenses categorywise
let data__=[];
let stagg=[];

for(let i of expenseItems)
{
    if(stagg.indexOf(i.category)==-1)
    {
        let obj={
         category: i.category,
         noOfExpense:1
        }
        stagg.push( i.category)
        data__.push(obj)
    }
    else
    {
        let ind=stagg.indexOf(i.category);
        console.log( data__[ind].noOfExpense)
        data__[ind].noOfExpense=parseInt(data__[ind].noOfExpense)+1;
        
        
    }
    
    
}


console.log(stagg,data__)
















 
//trial



let totalSaved=0;
categoriesList.map((item)=> totalSaved=totalSaved+ parseInt(item.available)) 

let totalSpent=0;
categoriesList.map((item)=> totalSpent += parseInt(item.spent)) 


  const data_= categoriesList;

  // categoryName: 'bvd',
  // categoryBudget: '100',
  // available: '100',
  // spent: 0,
  // index: 0
  const data=categoriesList
  return (
    <div id='dashboard-container'>


<Header title='Dashboard'/>

<div id='budget-stats'>



<div id='stats'>

<div className="stats-card">
  <span>
<span id='number'><b>{balance}</b> <br /> </span> 
Budget
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>{categoriesList.length}</b> <br /> </span> 
Category
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>{expenseItems.length}</b> <br /> </span> 
Expense
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>{totalSpent}</b> <br /> </span> 
Spent
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>{totalSaved}</b> <br /> </span> 
Saved
</span>

</div>
</div>

{/* <div id='chart-container'>
   <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={x}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
         
        </BarChart>
      </ResponsiveContainer>
      </div> */}

      <div id='chart-container'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data_}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="categoryName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="categoryBudget" fill="#8303cc" />
          <Bar dataKey="available" fill="#0ad456" />
          <Bar dataKey="spent" fill="#fe4523" />
        </BarChart>
      </ResponsiveContainer>
      </div>
   
      <div id='chart-container'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data__}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="noOfExpense" fill="blue" />
    
        
        </BarChart>
      </ResponsiveContainer>
      </div>
   

</div>

    </div>
  )
}
