/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import CapsTitle from './CapsTitle'

export default () => {
  const handleClick = event => {
    event.preventDefault()

    console.log('boop!')
  }

  return (
    <section
      sx={{
        marginBottom: '50px'
      }}
    >
      <CapsTitle>Stickers</CapsTitle>
      <button onClick={handleClick}>Buy Stickers</button>
      <p>This is currently a test — it doesn’t work yet!</p>
    </section>
  )
}
