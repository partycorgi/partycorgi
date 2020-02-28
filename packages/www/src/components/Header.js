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
    position: 'absolute',
    zIndex: 1,
    width: '100vw'
  }}>
    <MaxWidth sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'lightPurple',
      borderRadius: '10px',
      padding: '8px 20px'
    }}>
      <Wordmark />
      <Nav />
    </MaxWidth>
  </header>
)
