/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PageTemplate from '../components/PageTemplate'
import MDXDocument from '../content/assets.mdx'

export default () =>
  <PageTemplate title='Assets'>
    <MDXDocument />
  </PageTemplate>
