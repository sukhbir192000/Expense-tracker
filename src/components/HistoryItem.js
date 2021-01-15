import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

function HistoryItem({data}) {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div className= {data.amount>=0 ? 'history-item income-item' : 'history-item expense-item'} id={data.id} >
            <div className="cross" onClick={e => deleteTransaction(parseInt(e.target.parentNode.id))}>X</div>
            <div>{data.text}</div>
            <div>{data.amount}</div>
        </div>
    )
}

export default HistoryItem
