/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Nav from './Nav'
import MaxWidth from './MaxWidth'
import Wordmark from './Wordmark'

export default () => (
  <header sx={{
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0',
    position: 'fixed',
    zIndex: 1,
    width: '100vw'
  }}>
    <MaxWidth sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'lightPurple',
      borderRadius: '10px',
      padding: '8px 20px',
      boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.15)'
    }}>
      <Wordmark />
      <Nav />
    </MaxWidth>
  </header>
)
