import { h } from 'preact'
import PartyCorgi from './PartyCorgi.js'
import Wordmark from './Wordmark.js'

const Logo = () => {
  return (
    <a href='/' className='flex items-center font-bold'>
      <PartyCorgi />
      <Wordmark />
    </a>
  )
}

export default Logo
