/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useContext } from 'react'
import { store } from '../store.js'

export default () => {
  const { state } = useContext(store)
  const { showMobileNav } = state

  return (
    <div sx={{
      width: '100vw',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(3px)',
      height: '100%',
      position: 'absolute',
      zIndex: 2,
      transition: 'all 105ms ease-out',
      opacity: showMobileNav ? 1 : 0,
      height: showMobileNav ? '100%' : 0
    }} />
  )
}
