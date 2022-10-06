import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Footer from './Footer'
import NavBar from './NavBar'

interface TypeProp {
  children: ReactNode
}

const Layout: React.FC<TypeProp> = ({ children }) => {
  const isDarkMode = useSelector<RootState>((state) => state.isDarkMode)

  return (
    <div data-theme={isDarkMode ? 'dark' : 'light'}>
      <NavBar />
      <main className='main'>
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
