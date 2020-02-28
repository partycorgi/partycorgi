/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Header from '../components/Header'
import { StateProvider } from '../store.js'

export default ({ children }) => (
  <StateProvider>
    <Header />
    <div sx={{
      width: '100vw',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      height: '100%',
      position: 'absolute',
      zIndex: 2
    }} />
    <main>
      {children}
    </main>
  </StateProvider>
)
