import { h } from 'preact'

const MaxWidth = ({ className, children }) => {
  return (
    <div className={`w-full py-0 px-5 md:px-8 max-w-screen-lg ${className}`}>
      {children}
    </div>
  )
}

export default MaxWidth
