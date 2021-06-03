import { h } from 'preact'
import Logo from '../Logo/index.js'
import Nav from './Nav.js'
import MobileNav from './MobileNav.js'
import MaxWidth from '../Layout/MaxWidth.js'

const Header = () => {
  return (
    <header className='fixed flex justify-center h-[70px] w-screen bg-gray-900 text-white shadow-md z-10'>
      <MaxWidth>
        <div className='relative flex justify-between items-center py-2 px-0 md:px-5 rounded-xl h-full'>
          <Logo />
          <Nav />
        </div>
      </MaxWidth>
      <MobileNav />
    </header>
  )
}

export default Header
