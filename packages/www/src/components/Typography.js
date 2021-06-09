import { h } from 'preact'

export const Heading = ({ as, children, className }) => {
  switch (as) {
    case 'h6':
      return (
        <h6 className={`text-md font-bold mb-8 ${className ? className : ''}`}>
          {children}
        </h6>
      )
    case 'h5':
      return (
        <h5 className={`text-lg font-bold mb-8 ${className ? className : ''}`}>
          {children}
        </h5>
      )
    case 'h4':
      return (
        <h4 className={`text-lg font-bold mb-8 ${className ? className : ''}`}>
          {children}
        </h4>
      )
    case 'h3':
      return (
        <h3 className={`text-2xl font-bold mb-8 ${className ? className : ''}`}>
          {children}
        </h3>
      )
    case 'h2':
      return (
        <h2 className={`text-3xl font-bold mb-8 ${className ? className : ''}`}>
          {children}
        </h2>
      )
    default:
      return (
        <h1 className={`text-5xl font-bold mb-8 ${className ? className : ''}`}>
          {children}
        </h1>
      )
  }
}

export const Text = ({ children, className }) => (
  <p className={`mb-3 ${className ? className : ''}`}>{children}</p>
)

export const OrderedList = ({ children }) => (
  <ol className='list-outside py-3 pl-5 md:pl-8'>{children}</ol>
)
export const UnorderedList = ({ children }) => (
  <ul className='list-outside py-3 pl-5 md:pl-8'>{children}</ul>
)

export const ListItem = ({ children }) => (
  <li className='list-disc mb-3'>{children}</li>
)
