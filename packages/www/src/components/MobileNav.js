/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useContext, useState, useEffect } from 'react'

import { store } from '../store.js'
import MobileNavItems from './MobileNavItems'
import MaxWidth from './MaxWidth'

export default () => {
  const { state } = useContext(store)
  const [noDisplay, setNoDisplay] = useState(true)
  const { showMobileNav } = state

  const duration = 105

  useEffect(() => {
    if (!showMobileNav)
      setTimeout(() => setNoDisplay(true), duration)
    else setNoDisplay(false)
  }, [showMobileNav])

  return (
    <MaxWidth sx={{
      position: 'absolute',
      top: '110px',
      transition: 'all 105ms ease-out',
      opacity: showMobileNav ? 1 : 0,
      display: noDisplay ? 'none' : 'block'
    }}>
      <div sx={{
        backgroundColor: 'lightPurple',
        padding: '8px',
        borderRadius: '10px',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.15)'
      }}>
        <MobileNavItems />
      </div>
    </MaxWidth>
  )
}
