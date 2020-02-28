/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import MobileMenuToggle from './MobileMenuToggle'

const navItemStyles = {
  padding: '8px 16px',
  textDecoration: 'none',
  fontSize: 'navItem',
  fontWeight: 'semiBold',
  marginLeft: '6px',
  transition: 'background 200ms ease',
  borderRadius: '8px',

  '&:hover': {
    backgroundColor: 'blackTransparent'
  }
}

const Nav = data => {
  const { discordInviteUrl } = data.site.siteMetadata

  return (
    <>
      <nav
        sx={{
          display: ['none', 'flex'],
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
          Discord
        </a>
      </nav>
      <MobileMenuToggle />
    </>
  )
}

const query = graphql`
  query NavQuery {
    site {
      siteMetadata {
        discordInviteUrl
      }
    }
  }
`

export default props => <StaticQuery query={query} render={Nav} />
