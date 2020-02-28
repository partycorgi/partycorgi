/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { buttonStyles } from './Button'
import MaxWidth from './MaxWidth'
import Wordmark from './Wordmark'

export default props => <StaticQuery query={query} render={Hero} />

const Hero = data => {
  const { description, discordInviteUrl } = data.site.siteMetadata
  return (
    <section
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '684px',
        position: 'relative',
        background: 'linear-gradient(164.92deg, #9B6BD3 12.72%, #00E992 84.21%)'
      }}
    >
      <MaxWidth
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <h1
          sx={{
            fontSize: 'heading',
            fontWeight: 'heading',
            marginTop: 0,
            marginBottom: '32px',
            maxWidth: '760px',
            textAlign: 'center',
            color: 'text'
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
