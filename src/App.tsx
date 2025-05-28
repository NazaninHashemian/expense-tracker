import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
import './App.css'
function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Beef', amount: 25, category: 'Groceries' },
    { id: 2, description: 'Milk', amount: 6, category: 'Groceries' },
    { id: 3, description: 'Electricity', amount: 120, category: 'Utilities' }
  ]);
  
  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory): expenses;

  if (expenses.length === 0) {
    return (
      <div className='background row justify-content-center align-items-center min-vh-100 px-md-5 px-sm-3 px-1 py-5'>
        <div className='bg-light py-5 px-1 px-sm-3 px-md-4 px-lg-5  rounded shadow col-11 col-sm-10 col-md-9 col-lg-6'>
          <p>No expenses yet. Add some!</p>

          <div className="mb-3 border py-2 px-sm-2 px-md-4">
            <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
          </div>
        </div>
      </div>
    )
  }
  

  return (
    
    <div className='background row justify-content-center align-items-center min-vh-100 px-md-5 px-sm-3 px-1 py-5'>
      {/* <h2 className='fs-6'>Expense Tracker</h2> */}
      <div className='bg-light py-5 px-1 px-sm-3 px-md-4 px-lg-5  rounded shadow col-11 col-sm-10 col-md-9 col-lg-6'>
        {/* <div className="text-3xl font-bold text-red-500 text-center mt-10">
        Hello Tailwind!
        </div> */}
        <div className="mb-3 border py-2 px-sm-2 px-md-4">
          <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
        </div>
        <div className="mb-3 border  px-sm-1 px-md-3">
          <div  className="mb-5 py-3 px-sm-0 px-md-1">
            <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
          </div>
          <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
        </div>
      </div>

    </div>
  )
}

export default App;