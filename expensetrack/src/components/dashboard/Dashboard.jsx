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
        <LineChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="categoryName" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="categoryBudget" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="spent" stroke="#82ca9d" />
        </LineChart>
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
   

</div>

    </div>
  )
}
