/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export default ({ children, ...rest }) =>
  <h2
    sx={{
      fontSize: ['capsTitle'],
      fontWeight: 'body',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: 'purple30'
    }}
    {...rest}
  >
    {children}
  </h2>
