import { h } from 'preact'
import { MDXProvider } from '@mdx-js/preact'
import { Helmet } from 'react-helmet'
import Header from './components/Header/index.js'
import MDXComponents from './lib/MDXComponents.js'

const PageWrapper = ({ children, meta }) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Helmet>
        <title>{`${
          meta?.title ? meta?.title + ' | ' : ''
        }Party Corgi Network`}</title>
        <link rel='stylesheet' href='/styles.css' />
      </Helmet>
      <div className='flex flex-col min-h-screen w-full bg-gray-900 text-white'>
        <Header />
        <div className='flex-1 mt-[70px]'>{children}</div>
      </div>
    </MDXProvider>
  )
}

export default PageWrapper
