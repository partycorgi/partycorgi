import { h } from 'preact'
import { MDXProvider } from '@mdx-js/preact'
import { Helmet } from 'react-helmet'
import Header from './components/Header/index.js'

const components = {
  codeblock: props => <div class='bg-gray-400' {...props} />,
}
export default function PageWrapper({ children, frontMatter }) {
  console.log({ frontMatter })
  return (
    <MDXProvider components={components}>
      <Helmet>
        <title>{frontMatter?.title}</title>
        <link rel='stylesheet' href='/styles.css' />
      </Helmet>
      <div className='flex flex-col min-h-screen w-full bg-gray-900 text-white'>
        <Header />
        <div className='flex-1 mt-[70px]'>{children}</div>
      </div>
    </MDXProvider>
  )
}
