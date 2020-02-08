/** @jsx jsx */
import { jsx } from 'theme-ui'

export const buttonStyles = {
  fontSize: '16px',
  borderRadius: '6px',
  height: '33px',
  padding: '0 35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 300ms ease',
  backgroundColor: 'green',
  color: 'background',
  textDecoration: 'none',
  fontWeight: 'heading',

  '&:hover': {
    backgroundColor: 'green'
  }
}

export default ({ children }) => <button sx={buttonStyles}>{children}</button>
