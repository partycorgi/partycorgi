import { h } from 'preact'

const PartyCorgi = () => {
  return (
    <div className='relative w-8 h-8 mr-3'>
      <img
        className='hidden hover:block absolute top-0 left-0 w-8 h-8'
        src='/images/party-corgi.gif'
        alt='Party Corgi animated GIF'
      />
      <img
        className='block hover:hidden absolute top-0 left-0 w-8 h-8'
        src='/images/party-corgi-still.gif'
        alt='Party Corgi'
      />
    </div>
  )
}

export default PartyCorgi
