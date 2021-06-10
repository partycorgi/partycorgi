import { h, Fragment } from 'preact'
import Hero from '../components/Hero.js'
import { Section, MaxWidth } from '../components/Layout.js'
import { Heading, Text } from '../components/Typography.js'
import Discord from '../components/Icons/Discord.js'

const Home = () => (
  <Fragment>
    <Hero className='justify-start items-center md:h-[564px]'>
      <Heading className='text-center pb-12 text-gray-900'>
        An inclusive community of content creators helping each other grow.
      </Heading>
      <a
        href='https://discord.gg/partycorgi'
        className='flex items-center w-max py-4 px-7 rounded-md bg-gray-900 font-semibold hover:bg-purple-600 transition-all duration-200 ease-in-out'
      >
        <Discord /> Join Discord
      </a>
    </Hero>
    <Section>
      <MaxWidth>
        <div className='grid md:grid-cols-6'>
          <div className='p-5 md:col-span-4 bg-gray-600'>
            <Heading>Latest Podcast Ep.</Heading>
            <Text>
              I don't have access to the simplecast account to grab an access
              key, but we can either{' '}
              <a
                className='text-purple-300'
                href='https://help.simplecast.com/en/articles/2692209-how-to-embed-your-podcast-and-episodes'
              >
                manually embed
              </a>{' '}
              the latest episode very release, or we could use their{' '}
              <a
                className='text-purple-300'
                href='https://help.simplecast.com/en/articles/2724796-simplecast-2-0-api'
              >
                2.0 API
              </a>
            </Text>
            <Text>
              Might also be neat to have "news"/latest blog posts on the landing
              page?
            </Text>
          </div>
          <div className='hidden md:block p-5 col-span-2 bg-gray-500'>
            <Heading as='h2'>Side nav</Heading>
          </div>
        </div>
      </MaxWidth>
    </Section>
  </Fragment>
)

export default Home
