/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { buttonStyles } from './Button'
import MaxWidth from './MaxWidth'

const discordInviteUrl = 'https://discord.gg/S9Gdagv'

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
          fontWeight: 'semiBold',
          marginBottom: '32px'
        }}
      >
        We're an inclusive community of content creators helping each other grow.
      </h1>
      <a
        href={discordInviteUrl}
        target='_blank'
        sx={buttonStyles}
      >
        Join Discord
      </a>
    </MaxWidth>
  </section>
)
