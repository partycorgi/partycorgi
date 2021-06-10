import { h } from 'preact'

export const MaxWidth = ({ children }) => {
  return (
    <div className={`w-full py-0 px-5 md:px-8 max-w-screen-lg mx-auto`}>
      {children}
    </div>
  )
}

export const Section = ({ children }) => {
  return <section className='py-12'>{children}</section>
}
