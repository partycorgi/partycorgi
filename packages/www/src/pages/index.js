import { h } from 'preact'
import Hero from '../components/Layout/Hero.js'
// import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord.js'

const Home = () => (
  <Hero>
    <h1 className='text-5xl font-bold text-center pb-12 text-gray-900'>
      An inclusive community of content creators helping each other grow.
      </h1>
    <a
      href='https://discord.gg/partycorgi'
      className='py-4 px-5 rounded-md bg-gray-900 font-semibold'
    >
      Join Discord
    </a>
  </Hero>
)

export default Home
