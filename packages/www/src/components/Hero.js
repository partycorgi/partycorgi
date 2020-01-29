/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { buttonStyles } from './Button'
import MaxWidth from './MaxWidth'

export default props =>
  <StaticQuery
    query={query}
    render={Hero}
  />

const Hero = data => {
  const { description, discordInviteUrl } = data.site.siteMetadata

  return (
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
          {description}
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
