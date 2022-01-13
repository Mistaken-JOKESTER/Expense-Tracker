const AppReducer = (state, action) => {        
    switch(action.type){
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        id: state.transactions[state.transactions.length - 1] + 1,
                        amount: Number(action.payload.amount),
                        text: action.payload.text
                    }
                ]
            }

        default: return state
    }
}

export default AppReducer