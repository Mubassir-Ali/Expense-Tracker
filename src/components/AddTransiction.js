import React from 'react'

export const AddTransiction = () => {
    return (
        <>
        <h3>Add New Transiction</h3>
        <form id="form">
        	<div className="form-container">
			<label for="text">Text</label>
			<input type='text' id="text" placeholder="Enter text..."/>
        </div>


        <div className="form-container">
			<label for="amount">Amount<br/>
				(negative-expense, positive-income)	</label>
				
			<input type="number" id="amount" placeholder="Enter Amount"/>

			

        </div>
		<button className="btn">Add transaction</button>

        </form>
            
        </>
    )
}
