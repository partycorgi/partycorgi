/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const navItemStyles = {
  padding: '8px 10px',
  textDecoration: 'none',
  fontSize: 'navItem',
  fontWeight: 'heading'
}

const Nav = data => {
  const { discordInviteUrl } = data.site.siteMetadata

  return (
    <nav
      sx={{
        display: 'flex',
        position: 'relative',
        zIndex: 1
      }}
    >
      <a
        href={discordInviteUrl}
        target='_blank'
        rel='noopener noreferrer'
        sx={navItemStyles}
      >
        Discord
      </a>
      <Link to='/coc' sx={navItemStyles}>
        Code of Conduct
      </Link>
    </nav>
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
