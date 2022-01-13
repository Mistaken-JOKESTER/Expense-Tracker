import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpense() {
    const {transactions} = useContext(GlobalContext)
    let income = 0
    let expense = 0

    const amount = transactions.map(transaction => transaction.amount)
    amount.forEach((value => {
        if (value > 0){
            income += value
        } else {
            expense += value
        }
    }))

    return (
        <>
             <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                <p className="money plus">+${income.toFixed(2)}</p>
                    </div>
                <div>
                    <h4>Expense</h4>
                <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
                </div>
            </div>
            
        </>
    )
}
