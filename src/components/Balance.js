import React from 'react'
import TotalBalance from "./TotalBalance"
import BalanceSummary from "./BalanceSummary"

function Balance() {
    return (
        <div>
            <TotalBalance />
            <BalanceSummary />
        </div>
    )
}

export default Balance
