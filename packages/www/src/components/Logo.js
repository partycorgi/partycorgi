/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

import PartyCorgi from './PartyCorgi'
import Wordmark from './Wordmark'

export default ({ children }) =>
  <Link
    sx={{
      fontSize: 'navItem',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',

      '&:hover': {
        '.corgiAnimated': {
          opacity: 1
        },

        '.corgiStill': {
          opacity: 0
        }
      }
    }}
    to='/'
  >
    <PartyCorgi />
    <Wordmark />
  </Link>
