import { h } from 'preact'
import Hero from '../components/Layout/Hero.js'
import { Heading } from '../components/Typography.js'
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord.js'

const Home = () => (
  <Hero className='justify-start items-center md:h-[564px]'>
    <Heading className='text-center pb-12 text-gray-900'>
      An inclusive community of content creators helping each other grow.
    </Heading>
    <a
      href='https://discord.gg/partycorgi'
      className='flex items-center w-max py-4 px-7 rounded-md bg-gray-900 font-semibold hover:bg-purple-600 transition-all duration-200 ease-in-out'
    >
      <FaDiscord className='w-5 h-5 mr-2' /> Join Discord
    </a>
  </Hero>
)

export default Home
