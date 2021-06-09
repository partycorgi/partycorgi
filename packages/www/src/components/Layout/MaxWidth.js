import { h } from 'preact'

const MaxWidth = ({ children }) => {
  return (
    <div className={`w-full py-0 px-5 md:px-8 max-w-screen-lg mx-auto`}>
      {children}
    </div>
  )
}

export default MaxWidth
