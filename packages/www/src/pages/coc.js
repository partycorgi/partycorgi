/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import MaxWidth from '../components/MaxWidth'
import MDXDocument from '../content/coc.mdx'

export default props => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '70px',
    }}
  >
    <div
      sx={{
        width: '100vw',
        height: ['270px', '406px'],
        top: 0,
        left: 0,
        background: 'linear-gradient(164.92deg, #9B6BD3 12.72%, #00E992 84.21%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
      }}
    >
    </div>
    <MaxWidth
      sx={{
        position: 'relative',
        top: ['-150px', '-250px'],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1
        sx={{
          color: 'darkPurple',
          maxWidth: '748px',
          width: '100%',
          marginBottom: ['30px', '50px'],
          padding: '0 30px'
        }}
      >
        Code of conduct
        </h1>
      <div
        sx={{
          backgroundColor: 'lightPurple',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: ['20px 30px', '75px 30px']
        }}
      >
        <div sx={{ maxWidth: '748px' }}>
          <MDXDocument />
        </div>
      </div>
    </MaxWidth>
  </div>
)
