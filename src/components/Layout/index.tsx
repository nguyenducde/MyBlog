import { ReactNode } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

interface TypeProp {
  children: ReactNode
}

const Layout: React.FC<TypeProp> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className='main'>
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
