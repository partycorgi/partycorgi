/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const WhiteBackground = ({ children }) =>
  <div
    sx={{
      backgroundColor: 'white',
      borderRadius: '10px',
      width: '268px',
      height: '225px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {children}
  </div>
