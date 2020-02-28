/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useContext } from 'react'
import { store } from '../store.js'

import Menu from './Menu'

const toggleMobileNav = dispatch => {
  dispatch({ type: 'TOGGLE_MOBILE_NAV' })
}

export default props => {
  const globalState = useContext(store)
  const { dispatch } = globalState

  return (
    <button
      onClick={() => toggleMobileNav(dispatch)}
      sx={{
        display: ['flex', 'none'],
        position: 'relative',
        zIndex: 1,
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        padding: '10px'
      }}
    >
      <Menu />
    </button>
  )
}
