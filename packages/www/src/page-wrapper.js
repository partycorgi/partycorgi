import { h } from 'preact'
import { MDXProvider } from '@mdx-js/preact'
import { Helmet } from 'react-helmet'
import TopBar from './components/Header.js'
import MDXComponents from './mdx-components.js'
import Hero from './components/Hero.js'
import { MaxWidth } from './components/Layout.js'
import { Heading } from './components/Typography.js'

const PageWrapper = ({ children, meta }) => {
  return (
    <div>
      <Helmet>
        <title>{`${
          meta?.title ? meta?.title + ' | ' : ''
        }Party Corgi Network`}</title>
        <meta
          name='description'
          content={'An inclusive community of practice helping each other grow'}
        />
        <meta property='og:title' content='Party Corgi Network' />,
        <meta name='og:url' content='https://www.partycorgi.com/' />,
        <meta
          property='og:image'
          content={`https://www.partycorgi.com/ogImage.jpg`}
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Party Corgi Network' />
        <meta
          property='og:description'
          content={'An inclusive community of practice helping each other grow'}
        />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@partycorginetwk' />
        <meta name='twitter:title' content='Party Corgi Network' />
        <meta
          name='twitter:image'
          content={`https://www.partycorgi.com/ogImage.jpg`}
        />
        <meta
          name='twitter:description'
          content={'An inclusive community of practice helping each other grow'}
        />
        <link
          rel='icon'
          type='image/gif'
          href={'/images/party-corgi-still.gif'}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/styles.css' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <div className='flex flex-col min-h-screen w-full bg-gray-900 text-white'>
        <TopBar />
        <div className='flex-1 mt-[70px]'>
          <MDXProvider components={MDXComponents}>
            {meta?.layout === 'centered-prose' ? (
              <div>
                <Hero className='items-start justify-center md:h-[382px]'>
                  <Heading className='text-gray-900'>{meta.title}</Heading>
                </Hero>
                <div className='mx-5 bg-gray-700 py-12 px-5 rounded-lg transform -translate-y-24'>
                  <MaxWidth>{children}</MaxWidth>
                </div>
              </div>
            ) : (
              <div>{children}</div>
            )}
          </MDXProvider>
        </div>
      </div>
    </div>
  )
}

export default PageWrapper
