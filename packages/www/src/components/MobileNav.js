/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useContext, useState, useEffect } from 'react'

import { store } from '../store.js'
import MobileNavItems from './MobileNavItems'
import MaxWidth from './MaxWidth'

const easeOutQuint = 'cubic-bezier(0.230, 1.000, 0.320, 1.000)'

export default ({ location }) => {
  const { state } = useContext(store)
  const [display, setDisplay] = useState(false)
  const [animate, setAnimate] = useState(false)
  const { showMobileNav } = state

  const duration = 150

  useEffect(() => {
    if (!showMobileNav) {
      setAnimate(false)
      setTimeout(() => setDisplay(false), duration)
    }
    else {
      setDisplay(true)
      setTimeout(() => setAnimate(true), 10)
    }
  }, [showMobileNav])

  return (
    <MaxWidth sx={{
      position: 'absolute',
      top: '110px',
      transition: `transform 275ms ${easeOutQuint}, opacity 150ms ${easeOutQuint}`,
      opacity: animate ? 1 : 0,
      transform: animate ? 'scale3d(1)' : 'scale(0.9)',
      display: display ? 'block' : 'none'
    }}>
      <div sx={{
        backgroundColor: 'purple20',
        padding: '8px',
        borderRadius: '10px',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.15)'
      }}>
        <MobileNavItems location={location} />
      </div>
    </MaxWidth>
  )
}
