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
    width: '100vw'
  }}>
    <MaxWidth sx={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Wordmark />
      <Nav />
    </MaxWidth>
  </header>
)
