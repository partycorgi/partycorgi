/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const navItemStyles = {
  padding: '12px',
  textDecoration: 'none',
  fontSize: ['navItemMobile', 'navItem'],
  fontWeight: 'semiBold',
  transition: 'background 200ms ease',
  borderRadius: '8px',

  '&:hover': {
    backgroundColor: 'blackTransparent'
  }
}

const MobileNavItems = data => {
  const { discordInviteUrl } = data.site.siteMetadata

  return (
    <>
      <nav
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Link to='/streamers' sx={navItemStyles}>
          Streamers
        </Link>
        <Link to='/coc' sx={navItemStyles}>
          Code of Conduct
        </Link>
        <a
          href={discordInviteUrl}
          target='_blank'
          rel='noopener noreferrer'
          sx={navItemStyles}
        >
          Join Discord
        </a>
      </nav>
    </>
  )
}

const query = graphql`
  query MobileNavQuery {
    site {
      siteMetadata {
        discordInviteUrl
      }
    }
  }
`

export default props => <StaticQuery query={query} render={MobileNavItems} />
