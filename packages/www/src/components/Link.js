import { h } from 'preact'

const Link = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={`underline hover:text-blue-400 transition-all duration-200 ease-in-out ${
        className ? className : ''
      }`}
    >
      {children}
    </a>
  )
}

export default Link
