import { h } from 'preact'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/preact'
import Layout from './components/Layout/index.js'

const components = {
  codeblock: props => <div class='bg-gray-400' {...props} />,
}
export default function PageWrapper({ children, frontMatter }) {
  console.log({ frontMatter })
  return (
    <MDXProvider components={components}>
      <Layout>
        <Helmet>
          <link rel='stylesheet' href='/styles.css' />
        </Helmet>
        {children}
      </Layout>
    </MDXProvider>
  )
}
