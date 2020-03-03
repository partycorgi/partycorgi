/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PageTemplate from '../components/PageTemplate'
import MDXDocument from '../../../../docs/list-of-streamers.md'

export default () =>
  <PageTemplate title='Streamers'>
    <MDXDocument />
  </PageTemplate>
