// import React from 'react'
import './dashboard.css'
import { Header } from '../header/header'
import { budgetContext } from '../../contexts/budgetContext'
import { useContext } from 'react'
import React, { PureComponent } from 'react';
import {
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
console.log(categoriesList)
  const data_= [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
<span id='number'><b>3000</b> <br /> </span> 
Budget
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>3000</b> <br /> </span> 
Category
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>3000</b> <br /> </span> 
Expense
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>3000</b> <br /> </span> 
Spent
</span>

</div>
<div className="stats-card">
  <span>
<span id='number'><b>3000</b> <br /> </span> 
Saved
</span>

</div>
</div>
<div id='chart-container'>
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
      </div>

</div>

    </div>
  )
}
