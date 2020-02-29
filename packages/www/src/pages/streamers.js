/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PageTemplate from '../components/PageTemplate'
import MDXDocument from '../content/streamers.mdx'

export default () =>
  <PageTemplate title='Streamers'>
    <MDXDocument />
  </PageTemplate>
