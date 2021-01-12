import React from 'react'

export const AddTransiction = () => {
    return (
        <>
        <h3>Add New Transiction</h3>
        <form>
        	<div className="form-container">
			<label htmlFor="text">Text</label>
			<input type='text' placeholder="Enter text..."/>
        </div>


        <div className="form-container">
			<label htmlFor="amount">Amount<br/>
				(negative-expense, positive-income)	</label>
				
			<input type="number" placeholder="Enter Amount"/>

			

        </div>
		<button className="btn">Add transaction</button>

        </form>
            
        </>
    )
}
