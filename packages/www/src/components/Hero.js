/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { buttonStyles } from './Button'
import MaxWidth from './MaxWidth'
import Discord from './Discord'

export default props => <StaticQuery query={query} render={Hero} />

const Hero = data => {
  const { description, discordInviteUrl } = data.site.siteMetadata
  return (
    <section
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: ['auto', '684px'],
        padding: ['80px 0', 0],
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
            marginTop: '60px',
            marginBottom: '54px',
            maxWidth: '860px',
            textAlign: 'center',
            color: 'purple10'
          }}
        >
          {description}
        </h1>
        <a href={discordInviteUrl} target='_blank' sx={buttonStyles}>
          <Discord />
          <span sx={{ marginLeft: '10px' }}>
            Join Discord
          </span>
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
