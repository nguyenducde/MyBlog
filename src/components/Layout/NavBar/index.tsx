import { useEffect } from 'react'
import { Link } from 'react-scroll'
import mockNavBarData from '../../../mock-data/mockNavBarData'

const NavBar: React.FC = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    const navbarItem = document.querySelectorAll('.navbar__item')
    const iconOpen = document.querySelector('.navbar__mobile-open') as HTMLElement
    const iconClose = document.querySelector('.navbar__mobile-close') as HTMLElement

    function handleOpenNavbar() {
      navbar?.classList.add('navbar--open')
      iconOpen.style.display = 'none'
      iconClose.style.display = 'block'
      document.body.style.overflow = 'hidden'
    }

    function handleCloseNavbar() {
      navbar?.classList.remove('navbar--open')
      iconClose.style.display = 'none'
      iconOpen.style.display = 'block'
      document.body.style.overflow = 'visible'
    }

    navbarItem.forEach((item) => {
      item.addEventListener('click', handleCloseNavbar)
    })

    iconOpen?.addEventListener('click', handleOpenNavbar)
    iconClose?.addEventListener('click', handleCloseNavbar)

    return () => {
      iconOpen?.removeEventListener('click', handleOpenNavbar)
      iconClose?.removeEventListener('click', handleCloseNavbar)
    }
  }, [])

  return (
    <>
      <div className='navbar__mobile'>
        <i className='fas fa-bars navbar__mobile-open'></i>
        <i className='far fa-times navbar__mobile-close'></i>
      </div>
      <ul className='navbar'>
        {mockNavBarData.map((item) => {
          return (
            <Link
              activeClass='active'
              className='navbar__item'
              to={item.to}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              key={item.id}
            >
              <i className={item.icon} data-aos='fade-down-right' data-aos-duration='800'></i>
              <p data-aos='fade-down-left' data-aos-duration='800'>
                {item.name}
              </p>
            </Link>
          )
        })}
      </ul>
    </>
  )
}

export default NavBar
