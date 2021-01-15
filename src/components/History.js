import React, { useContext } from 'react'
import Heading from './Heading'
import HistoryItem from './HistoryItem'
import {GlobalContext} from '../context/GlobalState'

function History() {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <Heading text="History" />
            {
                transactions.length > 0 ?
                transactions.map(transaction => <HistoryItem key={transaction.id} data={transaction} />)
                :
                <div className="no-history">No trancations made yet</div>
            }
        </div>
    )
}

export default History
