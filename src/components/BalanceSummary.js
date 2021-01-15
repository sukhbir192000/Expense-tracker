import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

function BalanceSummary() {
    const {transactions} = useContext(GlobalContext);
    return (
        <div className="summary-container">
            <div>
                <div className="summary-heading">Income</div>
                <div className="money money-plus">${
                    transactions.reduce((total ,transaction) => transaction.amount>=0 ? total+transaction.amount : total,0).toFixed(2)
                }</div>
            </div>
            <div>
                <div className="summary-heading">Expense</div>
                <div className="money money-minus">${
                    transactions.reduce((total ,transaction) => transaction.amount<0 ? total-transaction.amount : total,0).toFixed(2)
                }</div>
            </div>
        </div>
    )
}

export default BalanceSummary
