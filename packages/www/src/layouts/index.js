/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Header from '../components/Header'
import Overlay from '../components/Overlay'
import { StateProvider } from '../store.js'

export default ({ children }) => (
  <StateProvider>
    <Header />
    <Overlay />
    <main>
      {children}
    </main>
  </StateProvider>
)
