/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useContext } from 'react'
import { globalHistory } from '@reach/router'

import { store } from '../store.js'

export default () => {
  const { dispatch } = useContext(store)

  useEffect(() => {
    return globalHistory.listen(() => {
      dispatch({ type: 'HIDE_MOBILE_NAV' })
    })
  }, [])

  return null
}
