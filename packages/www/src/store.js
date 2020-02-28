import React, { createContext, useReducer } from 'react'

const initialState = {}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'TOGGLE_MOBILE_NAV':
        const newState = { showMobileNav: !state.showMobileNav }
        return newState
      case 'HIDE_MOBILE_NAV':
        return { showMobileNav: false }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
