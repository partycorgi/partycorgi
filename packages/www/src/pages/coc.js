/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import MaxWidth from '../components/MaxWidth'
import MDXDocument from '../content/coc.mdx'

export default props => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <MaxWidth>
      <h1>Code of conduct</h1>
      <MDXDocument />
    </MaxWidth>
  </div>
)
