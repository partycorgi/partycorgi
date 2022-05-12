import { h } from 'preact'
import { useState } from 'preact/hooks'
import Logo from './Logo.js'
import { MaxWidth } from './Layout.js'
import ExternalLink from '../components/Icons/ExternalLink.js'

const navRoutes = [
  {
    title: 'Code of Conduct',
    href: '/code-of-conduct',
    isExternal: false,
  },
  {
    title: 'Assets',
    href: '/assets',
    isExternal: false,
  },
  {
    title: 'Podcast',
    href: 'https://party-corgi-podcast.simplecast.com/',
    isExternal: true,
  },
]

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <header className='fixed flex justify-center h-[70px] w-screen bg-gray-900 text-white shadow-md z-10'>
        <MaxWidth>
          <div className='relative flex justify-between items-center py-2 px-0 md:px-5 rounded-xl h-full'>
            <Logo />
            <nav className='relative hidden md:flex z-[1]'>
              {navRoutes.map((route, i) => {
                const { title, href, isExternal } = route
                return (
                  <a
                    key={i}
                    className='flex items-center py-2 px-4 ml-2 font-semibold text-md rounded-lg hover:bg-red-400 transition-all duration-200 ease-in-out'
                    href={href}
                  >
                    {title} {isExternal && <ExternalLink />}
                  </a>
                )
              })}
            </nav>
            <MenuToggle onClick={() => setOpen(!isOpen)} />
          </div>
        </MaxWidth>
      </header>
      <MobileNav isOpen={isOpen} />
    </div>
  )
}

export default Header

const MenuToggle = ({ onClick }) => {
  return (
    <button
      className='block md:hidden text-white hover:bg-red-400 p-2 rounded-md'
      onClick={onClick}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z'
          fill='currentColor'
        />
      </svg>
    </button>
  )
}

const MobileNav = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:hidden absolute top-[70px] w-full bg-gray-900`}
    >
      <nav className='flex flex-col py-4 px-5'>
        <a
          href='/code-of-conduct'
          className='py-2 px-4 font-semibold text-md rounded-lg hover:bg-red-400 transition-all duration-200 ease-in-out'
        >
          Code of Conduct
        </a>
        <a
          href='/assets'
          className='py-2 px-4 font-semibold text-md rounded-lg hover:bg-red-400 transition-all duration-200 ease-in-out'
        >
          Assets
        </a>
      </nav>
    </div>
  )
}
