import { h } from 'preact'
import Header from '../Header/index.js'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-gray-900 text-white'>
      <Header />
      <div className='flex-1 mt-[70px]'>{children}</div>
    </div>
  )
}

export default Layout
