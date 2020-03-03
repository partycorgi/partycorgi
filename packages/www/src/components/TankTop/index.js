/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Egghead from '../Egghead'
import CapsTitle from '../CapsTitle'
import { WhiteBackground } from './styles'
import partyCorgiTankTop from '../../images/party-corgi-tank-top.png'

const tankTopUrl = 'https://store.egghead.io/product/party-corgi-tank-top'

export default () => {
  return (
    <section sx={{
      marginBottom: '50px'
    }}>
      <CapsTitle>
        Party Corgi Tank Top
      </CapsTitle>
      <a
        href={tankTopUrl}
        sx={{
          textDecoration: 'none',
          '&:hover': {
            'svg': {
              transform: 'scale3d(1.3, 1.3, 1.3) rotate(6deg)'
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
