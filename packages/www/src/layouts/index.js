/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Header from '../components/Header'

export default ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
)
