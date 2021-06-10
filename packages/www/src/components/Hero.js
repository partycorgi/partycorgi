import { h } from 'preact'
import { MaxWidth } from './Layout.js'

const Hero = ({ className, children }) => {
  return (
    <div className='bg-gradient-to-br from-purple-400 to-green-300'>
      <MaxWidth className='mx-auto'>
        <div
          className={`flex flex-col py-20 px-5 ${className ? className : ''}`}
        >
          {children}
        </div>
      </MaxWidth>
    </div>
  )
}

export default Hero
