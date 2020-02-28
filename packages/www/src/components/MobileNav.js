/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Menu from './Menu'

const navItemStyles = {
  padding: '12px 0',
  textDecoration: 'none',
  fontSize: 'navItem',
  fontWeight: 'semiBold',
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
          Discord
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

export default props => <StaticQuery query={query} render={Nav} />
