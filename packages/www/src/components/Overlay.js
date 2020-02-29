/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useContext, useState, useEffect } from 'react'
import { store } from '../store.js'

export default () => {
  const { state } = useContext(store)
  const [display, setDisplay] = useState(false)
  const [animate, setAnimate] = useState(false)
  const { showMobileNav } = state

  const duration = 105

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
    <div sx={{
      width: '100vw',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(3px)',
      height: '100%',
      position: 'absolute',
      zIndex: 2,
      transition: 'all 105ms ease-out',
      opacity: animate ? 1 : 0,
      display: display ? 'block' : 'none'
    }} />
  )
}
