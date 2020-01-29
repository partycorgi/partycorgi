/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Hero from '../components/Hero'

export default ({ children }) => (
  <button
    sx={{
      fontSize: '16px',
      fontWeight: 'body',
      borderRadius: '6px',
      height: '33px',
      padding: '0 35px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'text',
      transition: 'all 300ms ease',
      backgroundColor: 'green',

      '&:hover': {
        backgroundColor: 'green'
      }
    }}>
    {children}
  </button>
)
