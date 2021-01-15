import React, { useReducer, createContext } from "react"

const initialState = {
  transactions: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        transactions: [...state.transactions, action.payload]
      }
    case 'DEL_TRANSACTION':
      return {
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state
  }
}

export const GlobalContext = createContext(initialState)

function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  function deleteTransaction(id) {
    console.log(id)
    dispatch({
      type: 'DEL_TRANSACTION',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction: addTransaction,
      deleteTransaction: deleteTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
