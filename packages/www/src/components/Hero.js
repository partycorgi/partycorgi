/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { buttonStyles } from './Button'
import MaxWidth from './MaxWidth'

export default props => <StaticQuery query={query} render={Hero} />

const Hero = data => {
  const { description, discordInviteUrl } = data.site.siteMetadata
  return (
    <section
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '841px',
        background: 'linear-gradient(164.92deg, #9B6BD3 12.72%, #00E992 84.21%)'
      }}
    >
      <MaxWidth
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <h1
          sx={{
            fontSize: 'heading',
            fontWeight: 'heading',
            marginBottom: '32px',
            maxWidth: '630px'
          }}
        >
          {description}
        </h1>
        <a href={discordInviteUrl} target='_blank' sx={buttonStyles}>
          Join Discord
        </a>
      </MaxWidth>
    </section>
  )
}

const query = graphql`
  query SiteDiscordQuery {
    site {
      siteMetadata {
        discordInviteUrl
        description
      }
    }
  }
`
