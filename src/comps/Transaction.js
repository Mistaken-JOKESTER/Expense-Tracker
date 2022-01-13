import React from 'react'

export default function Transaction({transaction, deleteTransaction}) {

    return (
        <li className={transaction.amount > 0?"plus":"minus"}>
            {transaction.text} <span>{transaction.amount > 0?"+":"-"}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
