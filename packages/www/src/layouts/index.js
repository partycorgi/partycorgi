/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { globalHistory } from '@reach/router'

import Header from '../components/Header'
import Overlay from '../components/Overlay'
import OnRouteChange from '../components/OnRouteChange'
import { StateProvider } from '../store.js'

export default ({ children, location }) => {
  return (
    <StateProvider>
      <OnRouteChange />
      <Header />
      <Overlay />
      <main>
        {children}
      </main>
    </StateProvider>
  )
}
