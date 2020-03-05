/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import MobileMenuToggle from './MobileMenuToggle'
import navItems from '../data/navItems'

const navItemStyles = {
  padding: '8px 16px',
  textDecoration: 'none',
  fontSize: 'navItem',
  fontWeight: 'semiBold',
  marginLeft: '6px',
  transition: 'all 200ms ease',
  borderRadius: '8px',
}

const Nav = ({ data, location }) => {
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
        {Object.values(navItems).map(item => (
          <Link
            to={item.url}
            sx={{
              ...navItemStyles,
              backgroundColor: location.pathname === item.url ? 'blackTransparent' : 'none',
              color: location.pathname === item.url ? item.color : 'white',

              '&:hover': {
                backgroundColor: 'blackTransparent',
                color: item.color
              }
            }}
          >
            {item.display}
          </Link>
        ))}
        <a
          href={discordInviteUrl}
          sx={{
            ...navItemStyles,

            '&:hover': {
              backgroundColor: 'blackTransparent',
              color: 'blue'
            }
          }}
        >
          Join Discord
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

export default props => <StaticQuery query={query} render={(data) => <Nav data={data} location={props.location} />} />
