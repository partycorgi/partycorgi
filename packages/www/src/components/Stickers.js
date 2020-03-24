/** @jsx jsx */
import { jsx } from 'theme-ui'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

import CapsTitle from './CapsTitle'

export default () => {
  const handleSubmit = async event => {
    event.preventDefault()

    const { data } = await axios.post('/.netlify/functions/create-checkout')

    console.log({ data })

    // TODO probably env var this
    const stripe = await loadStripe(
      'pk_test_38mtS6edMLcrnhLxmoAbTa1S00zC8bvrmi'
    )
    const { error } = await stripe.redirectToCheckout({
      sessionId: data.sessionId
    })

    alert(error.message)
  }

  return (
    <section
      sx={{
        marginBottom: '50px'
      }}
    >
      <CapsTitle>Stickers</CapsTitle>
      <form
        action='/.netlify/functions/create-checkout'
        method='POST'
        onSubmit={handleSubmit}
      >
        <button type='submit'>Buy Stickers</button>
      </form>
      <p>This is currently a test — it doesn’t work yet!</p>
    </section>
  )
}
