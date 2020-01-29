/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';

import Button from './Button'
import MaxWidth from './MaxWidth'

export default props => (
  <section
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100vw',
    }}
  >
    <MaxWidth>
      <h1
        sx={{
          marginBottom: '32px'
        }}
      >
        We're an inclusive community of content creators helping each other grow.
      </h1>
      <Button>Join Discord</Button>
    </MaxWidth>
  </section>
)
