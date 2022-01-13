import './App.css';
import AddTransaction from './comps/AddTransaction';
import Balance from './comps/Balance';
import { Header } from './comps/Header';
import IncomeExpense from './comps/IncomeExpense';
import TransactionList from './comps/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className='container'>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
