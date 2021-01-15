import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

function TotalBalance() {
    const {transactions} = useContext(GlobalContext);
    return (
        <div className="total-balance-container">
            Your Balance
            <div className="total-balance-amount">${transactions.reduce((total ,transaction) => total+transaction.amount,0).toFixed(2)}</div>
        </div>
    )
}

export default TotalBalance
