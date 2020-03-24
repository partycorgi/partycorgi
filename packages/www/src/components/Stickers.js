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
      <form action='/.netlify/create-checkout' method='POST'>
        <button type='submit'>Buy Stickers</button>
      </form>
      <p>This is currently a test — it doesn’t work yet!</p>
    </section>
  )
}
