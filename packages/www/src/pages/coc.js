/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PageTemplate from '../components/PageTemplate'
import MDXDocument from '../content/coc.mdx'

export default () =>
  <PageTemplate title='Code of conduct'>
    <MDXDocument />
  </PageTemplate>
