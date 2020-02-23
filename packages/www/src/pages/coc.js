/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import MaxWidth from '../components/MaxWidth'
import MDXDocument from '../content/coc.mdx'

export default props => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '80px',
    }}
  >
    <div
      sx={{
        width: '100vw',
        height: '306px',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'linear-gradient(164.92deg, #9B6BD3 12.72%, #00E992 84.21%)'
      }}
    >
    </div>
    <MaxWidth sx={{ position: 'relative' }}>
      <h1>Code of conduct</h1>
      <MDXDocument />
    </MaxWidth>
  </div>
)
