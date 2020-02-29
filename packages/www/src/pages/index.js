/** @jsx jsx */
import { jsx } from 'theme-ui'

import Hero from '../components/Hero'
import Merch from '../components/Merch'
import MaxWidth from '../components/MaxWidth'
import LatestStreams from '../components/LatestStreams'

export default props => (
  <div
    sx={{
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      color: 'primary' // picks up value from `theme.colors.primary`
    }}
  >
    <Hero />
    <div sx={{ display: 'flex', justifyContent: 'center' }}>
      <MaxWidth sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: ['center', 'flex-start'],
        flexDirection: ['column', 'row']
      }}>
        <LatestStreams />
        <Merch />
      </MaxWidth>
    </div>
  </div>
)
