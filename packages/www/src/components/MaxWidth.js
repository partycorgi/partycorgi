/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export default ({ children, ...rest }) => (
  <div
    sx={{
      maxWidth: '873px',
      width: '100%'
    }}
    {...rest}
  >
    {children}
  </div>
)
