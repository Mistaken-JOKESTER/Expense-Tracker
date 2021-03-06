import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
    const {addTransaction} = useContext(GlobalContext)

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    function clickHandler() {
        if(text === "" || amount === 0){
            return
        }

        addTransaction(text, amount)
        setText("")
        setAmount(0)
    }


    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e) => {
                        setText(e.target.value)
                    }}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount 
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => {
                        setAmount(e.target.value)
                    }}/>
                </div>
                <button type='button' className="btn" onClick={clickHandler}>Add transaction</button>
            </form>
        </>
    )
}
