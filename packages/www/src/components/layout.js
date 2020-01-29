/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <>
    <header>
      <Link to='/'>Party Corgi!</Link>
      <nav>
        <Link to='/'>Discord</Link>
        <Link to='/coc'>Code of Conduct</Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </>
)
