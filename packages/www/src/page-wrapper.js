import { h } from 'preact'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/preact'

const components = {
  codeblock: props => <div class='bg-gray-400' {...props} />,
}
export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <div>
        <Helmet>
          <link rel='stylesheet' href='/styles.css' />
        </Helmet>
        {props.children}
      </div>
    </MDXProvider>
  )
}
