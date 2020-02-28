/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export default ({ children, ...rest }) => (
  <div
    sx={{
      maxWidth: '1020px',
      width: '100%',
      padding: '0 30px',
      boxSizing: 'border-box'
    }}
    {...rest}
  >
    {children}
  </div>
)
