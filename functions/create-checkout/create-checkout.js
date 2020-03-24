const stripe = require('stripe')(process.env.STRIPE_SECRET)

exports.handler = async (_event, _context) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Corgi Sticker Pack',
        description: 'Get a wiggle of corgi stickers!',
        images: ['https://lengstorf.com/images/jason-lengstorf.jpg'],
        amount: 500,
        currency: 'usd',
        // TODO allow people to choose a quantity
        quantity: 1
      }
    ],
    success_url:
      'https://partycorgi.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://partycorgi.com/cancel',
    shippingAddressCollection: true
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ sessionId: session.id })
  }
}
