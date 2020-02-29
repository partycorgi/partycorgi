/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Egghead from '../Egghead'
import { WhiteBackground } from './styles'
import partyCorgiTankTop from '../../images/party-corgi-tank-top.png'

const tankTopUrl = 'https://store.egghead.io/product/party-corgi-tank-top'

export default () => {
  return (
    <section sx={{
      width: '300px'
    }}>
      <h2
        sx={{
          fontSize: ['capsTitle'],
          fontWeight: 'body',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'purple30'
        }}
      >
        Party Corgi Tank Top
      </h2>
      <a
        href={tankTopUrl}
        target='_blank'
        sx={{
          textDecoration: 'none',
          '&:hover': {
            'svg': {
              transform: 'scale3d(1.3, 1.3, 1.3) rotate(6deg)'
            },

            p: {
              transition: 'color 200ms ease',
              color: 'blue'
            }
          }
        }}
      >
        <WhiteBackground>
          <img
            src={partyCorgiTankTop}
            alt='Party Corgi Tank Top'
            sx={{
              width: '214px',
              height: '214px',
              top: '-10px',
              position: 'relative'
            }}
          />
        </WhiteBackground>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <p>Get it from the</p>
          <Egghead sx={{ margin: '0 10px', transition: 'transform 200ms ease' }} />
          <p sx={{ textTransform: 'uppercase' }}>Swag Store</p>
        </div>
      </a>
    </section>
  )
}
