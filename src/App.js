import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransiction } from './components/AddTransiction'
import {GlobalProvider} from './context/GlobalState';



function App() {
  return (
    <div>
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransiction/>
    
    </GlobalProvider> 
    

    


    </div>
  );
}

export default App;
