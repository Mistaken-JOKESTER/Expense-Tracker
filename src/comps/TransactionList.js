import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

export default function TransactionList() {

    const {transactions, deleteTransaction} = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => {
                    return (<Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />)
                })}
            </ul>
        </>
    )
}
