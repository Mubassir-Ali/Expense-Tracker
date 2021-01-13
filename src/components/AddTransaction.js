import React, { useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction}=useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }

        addTransaction(newTransaction)
        
        

    }



    return (
        <>
        <h3>Add New Transiction</h3>
        <form onSubmit={onSubmit}>
        	<div className="form-container">
			<label htmlFor="text">Text</label>           
			<input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." required/>
{/* 
            <input type="radio" id="withdraw" name="gender" value="Withdraw" required/>
            <label for="withdraw">Withdraw</label><br></br>
            <input type="radio" id="deposit" name="gender" value="deposit" required/>
            <label for="deposit">deposit</label><br></br> */}
        </div>


        <div className="form-container">
			<label htmlFor="amount">Amount<br/>
				(negative-expense, positive-income)	</label>
				
			<input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount" required/>

			

        </div>
		<button className="btn">Add transaction</button>

        </form>
            
        </>
    )
}
