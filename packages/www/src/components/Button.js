/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Hero from '../components/Hero'

export const buttonStyles = {
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
  color: 'background',
  textDecoration: 'none',
  fontWeight: 'heading',

  '&:hover': {
    backgroundColor: 'green'
  }
}

export default ({ children }) => (
  <button
    sx={buttonStyles}>
    {children}
  </button>
)
