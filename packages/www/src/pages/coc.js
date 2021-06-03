import { h } from 'preact'
import Layout from '../components/Layout/index.js'
import Hero from '../components/Layout/Hero.js'
import MaxWidth from '../components/Layout/MaxWidth.js'
import MdxCOC from '../content/coc.mdx'

const COC = () => {
  return (
    <Layout>
      <Hero className='items-start justify-center'>
        <h1 className='font-bold text-5xl text-gray-900'>Code of Conduct</h1>
      </Hero>
      <MaxWidth>
        <MdxCOC />
      </MaxWidth>
    </Layout>
  )
}

export default COC
