/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import TankTop from './TankTop'
import Stickers from './Stickers'

export default () => {
  return (
    <div sx={{
      width: ['100%', '300px']
    }}>
      <TankTop />
      <Stickers />
    </div>
  )
}
