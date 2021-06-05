import { h } from 'preact'

const MobileNav = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:hidden absolute top-[70px] w-full bg-gray-900`}
    >
      <nav className='flex flex-col py-4 px-5'>
        <a
          href='code-of-conduct'
          className='py-2 px-4 font-semibold text-md rounded-lg hover:bg-red-400 transition-all duration-200 ease-in-out'
        >
          Code of Conduct
        </a>
      </nav>
    </div>
  )
}

export default MobileNav
