/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default ({ children }) =>
  <Link
    sx={{
      fontSize: 'wordmark',
      fontWeight: 'heading',

      '&:hover': {
        backgroundColor: 'secondary'
      }
    }}
    to='/'
  >
    partycorgi.com
  </Link>
