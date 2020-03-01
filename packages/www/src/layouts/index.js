/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { globalHistory } from '@reach/router'

import Header from '../components/Header'
import Overlay from '../components/Overlay'
import OnRouteChange from '../components/OnRouteChange'
import Seo from '../components/Seo'
import { StateProvider } from '../store.js'

export default ({ children, location }) => {
  return (
    <StateProvider>
      <Seo />
      <OnRouteChange />
      <Header />
      <Overlay />
      <main>
        {children}
      </main>
    </StateProvider>
  )
}
