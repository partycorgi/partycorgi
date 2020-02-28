/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default ({ children }) =>
  <Link
    sx={{
      fontSize: 'navItem',
      fontWeight: 'bold',
      textDecoration: 'none',

      '&:hover': {
        color: 'blackTransparent'
      }
    }}
    to='/'
  >
    Party Corgi Network
  </Link>
