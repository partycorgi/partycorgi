/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

import Nav from './Nav'
import MaxWidth from './MaxWidth'

export default ({ children }) => (
  <>
    <header sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '40px'
    }}>
      <MaxWidth sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link to='/'>Party Corgi!</Link>
        <Nav />
      </MaxWidth>
    </header>
    <main>
      {children}
    </main>
  </>
)
