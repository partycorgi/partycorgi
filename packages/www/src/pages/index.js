/** @jsx jsx */
import { jsx } from 'theme-ui'

import Hero from '../components/Hero'

export default props => (
  <div
    sx={{
      fontWeight: 'bold',
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      color: 'primary', // picks up value from `theme.colors.primary`
    }}>
    <Hero />
  </div>
)
