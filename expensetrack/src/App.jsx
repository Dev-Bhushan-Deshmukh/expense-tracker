import { Routes ,Route } from "react-router-dom"
import { Home } from "./components/homePage/home"
import { NewExpense } from "./components/newExpense/NewExpense"

import { Expense } from './components/expenses/Expenses'
import { Dashboard } from "./components/dashboard/Dashboard"
import { Budget } from "./components/budget/Budget"
import { BudgetPage } from "./components/bugdetPage/BudgetPage"

function App() {


  return (
<Routes>

<Route path="/home" element={<Home/>}  >
<Route path="/home/newexpense" element={<NewExpense/>} />
<Route path="/home/expenses" element={<Expense/>}  />
<Route path="/home/dashboard" element={<Dashboard/>}  />
<Route path="/home/budget" element={<BudgetPage/>}  />




</Route>





</Routes>



  
  )
}

export default App
