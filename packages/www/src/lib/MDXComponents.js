import { h } from 'preact'
import {
  Heading,
  Text,
  OrderedList,
  UnorderedList,
  ListItem,
} from '../components/Typography.js'
import Link from '../components/Link.js'

const MDXComponents = {
  h1: ({ children }) => <Heading as='h1' className="pt-12">{children[1]}</Heading>,
  h2: ({ children }) => <Heading as='h2' className="pt-12">{children[1]}</Heading>,
  h3: ({ children }) => <Heading as='h3' className="pt-12">{children[1]}</Heading>,
  h4: ({ children }) => <Heading as='h4' className="pt-12">{children[1]}</Heading>,
  h5: ({ children }) => <Heading as='h5' className="pt-12">{children[1]}</Heading>,
  h6: ({ children }) => <Heading as='h6' className="pt-12">{children[1]}</Heading>,
  p: ({ children }) => <Text>{children}</Text>,
  a: ({ href, children, className }) => (
    <Link href={href} className={className}>
      {children}
    </Link>
  ),
  ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList>{children}</OrderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  codeblock: (props) => <div className='bg-gray-400' {...props} />,
}

export default MDXComponents
