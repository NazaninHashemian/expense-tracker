import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([

    {
      id: 1,
      description: 'Beef',
      amount: 25,
      category: 'Groceries',
    },
    {
      id: 2,
      description: 'Milk',
      amount: 6,
      category: 'Groceries',
    },
    {
      id: 3,
      description: 'Electricity',
      amount: 120,
      category: 'Utilities',
    }
  ]
  );
  
  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory): expenses;

  if(expenses.length === 0) return null;

  return (
    <div className='mx-5'>
      <div className="text-3xl font-bold text-red-500 text-center mt-10">
      Hello Tailwind!
      </div>
      <div className="mb-3">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
    </div>
  )
}

export default App;