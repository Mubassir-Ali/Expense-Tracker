import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransictionList } from './components/TransictionList'



function App() {
  return (
    <div> 
    <Header/>
    <div className="container">
      <Balance/>
    </div>
    <IncomeExpenses/>
    <TransictionList/>

    


    </div>
  );
}

export default App;
