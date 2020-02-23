/** @jsx jsx */
import { jsx } from 'theme-ui'

export const buttonStyles = {
  fontSize: '16px',
  borderRadius: '6px',
  height: '45px',
  padding: '0 35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 300ms ease',
  backgroundColor: 'lightPurple',
  color: 'text',
  textDecoration: 'none',
  fontWeight: 'heading',

  '&:hover': {
    backgroundColor: 'background'
  }
}

export default ({ children }) => <button sx={buttonStyles}>{children}</button>
