import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';

const App = () => {
  useEffect(() =>{
    document.title = "Budget Tracker"
  })

  return (
    <AppProvider>
      <div className='container'>
        <br></br>
        <div className='row justify-content-center align-content-center '>
          <div className='col'>
            <div className='card'>
              <div className='card-header'>
                <h1 className='card-title mt-3'>My Budget Planner</h1>
                <div>
                  <div className='row mt-3'>
                    <div className='col-sm'>
                      <Budget />
                    </div>
                    <div className='col-sm'>
                      <Remaining />
                    </div>
                    <div className='col-sm'>
                      <ExpenseTotal />
                    </div>
                  </div>
                  <div className='card-body'>
                  <div>
                    <h3 className='card-card-subtitle mt-3'>Expenses</h3>
                    <div className='row mt-3'>
                      <div className='col-sm'>
                        <ExpenseList />
                      </div>
                    </div>
                    <h3 className='card-card-subtitle mt-3'>Add Expense</h3>
                    <div className='row mt-3'>
                      <div className='col-sm'>
                        <AddExpenseForm />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </AppProvider>
  );
};

export default App;