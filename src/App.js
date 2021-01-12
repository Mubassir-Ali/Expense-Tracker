import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransictionList } from './components/TransictionList'
import { AddTransiction } from './components/AddTransiction'



function App() {
  return (
    <div> 
    <Header/>
    <div className="container">
      <Balance/>
    </div>
    <IncomeExpenses/>
    <TransictionList/>
    <AddTransiction/>

    


    </div>
  );
}

export default App;
