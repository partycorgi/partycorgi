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
      padding: '40px 0',
      position: 'absolute',
      width: '100vw'
    }}>
      <MaxWidth sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link
          to='/'
          sx={{
            fontSize: 'navItem',
            fontWeight: 'heading'
          }}
        >
          partycorgi.com
        </Link>
        <Nav />
      </MaxWidth>
    </header>
    <main>
      {children}
    </main>
  </>
)
