import { h } from 'preact'

const Footer = () => {
  return (
    <div className='pb-3 px-5 text-center'>
      <span> Last updated {new Date().getFullYear()}</span>
    </div>
  )
}

export default Footer
