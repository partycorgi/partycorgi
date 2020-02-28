/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { store } from '../store.js'
import Nav from './Nav'
import MobileNav from './MobileNav'
import MaxWidth from './MaxWidth'
import Wordmark from './Wordmark'
import partyCorgi from '../images/party-corgi.gif'
import partyCorgiStill from '../images/party-corgi-still.gif'

const styles = {
  width: '30px',
  height: '30px',
  position: 'absolute',
  top: 0,
  left: 0
}

export default () => {
  return (
    <div
      sx={{
        position: 'relative',
        width: '30px',
        height: '30px',
        marginRight: '12px'
      }}
    >
      <img
        className='corgiAnimated'
        sx={{
          ...styles,
          opacity: 0
        }}
        src={partyCorgi}
        alt='Party Corgi animated GIF'
      />
      <img
        className='corgiStill'
        sx={{
          ...styles
        }}
        src={partyCorgiStill}
        alt='Party Corgi'
      />
    </div>
  )
}
