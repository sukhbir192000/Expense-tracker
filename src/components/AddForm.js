import React, { useState, useContext } from 'react'
import Heading from "./Heading";
import {GlobalContext} from '../context/GlobalState'

function AddForm() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text==='' || amount===''){
            alert("Fill all the fields!")
            return
        }
        addTransaction({
            id: Math.floor(Math.random()*100000),
            text: text,
            amount: parseFloat(amount)
        })
        setText('')
        setAmount('')
    }

    return (
        <div>
            <Heading text="Add new transaction" />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Enter Text..." 
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount <br/>(negative - expense, positive - income)</label>
                    <input 
                        type="number" 
                        placeholder="Enter Amount..."
                        name="amount" 
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddForm
