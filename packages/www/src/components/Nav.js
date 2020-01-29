/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Nav = data => {
  const { discordInviteUrl } = data.site.siteMetadata

  return (
    <nav
      sx={{
        display: 'flex'
      }}
    >
      <a href={discordInviteUrl} target='_blank' rel='noopener noreferrer'>
        Discord
      </a>
      <Link to='/coc'>
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

export default props =>
  <StaticQuery
    query={query}
    render={Nav}
  />
