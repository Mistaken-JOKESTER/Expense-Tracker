import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount)
    const balance = (amount.reduce(((acc, item) => acc+=item), 0)).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{balance < 0 && "-"}${Math.abs(balance)}</h1>
        </>
    )
}
