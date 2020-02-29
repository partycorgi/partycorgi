/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { store } from '../store.js'
import Nav from './Nav'
import MobileNav from './MobileNav'
import MaxWidth from './MaxWidth'
import Logo from './Logo'

export default () => {
  return (
    <header sx={{
      display: 'flex',
      justifyContent: 'center',
      height: '70px',
      position: 'fixed',
      backgroundColor: 'darkPurple',
      zIndex: 3,
      width: '100vw',
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.15)'
    }}>
      <MaxWidth>
        <div sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '10px',
          padding: ['8px 0', '8px 20px'],
          height: '100%',
          position: 'relative'
        }}>
          <Logo />
          <Nav />
        </div>
      </MaxWidth>
      <MobileNav />
    </header>
  )
}
