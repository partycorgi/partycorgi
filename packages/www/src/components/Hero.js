/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';

import Button from './Button'

export default props => (
  <>
    <h1
      sx={{
        marginBottom: '32px'
      }}
    >
      Come hang out with a community of content creators, live streamers, and all around awesome people.
    </h1>
    <Button>Join Discord</Button>
  </>
)
