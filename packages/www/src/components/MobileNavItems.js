/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import navItems from '../data/navItems'

const navItemStyles = {
  padding: '12px',
  textDecoration: 'none',
  fontSize: ['navItemMobile', 'navItem'],
  fontWeight: 'semiBold',
  transition: 'background 200ms ease',
  borderRadius: '8px',
  marginBottom: '6px',

  '&:hover': {
    backgroundColor: 'blackTransparent'
  }
}

const MobileNavItems = ({ data, location }) => {
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

export default props => (
  <StaticQuery
    query={query}
    render={(data) => <MobileNavItems data={data} location={props.location} />}
  />
)
