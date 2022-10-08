import { Link } from 'react-scroll'
import mockNavBarData from '../../../mock-data/mockNavBarData'

const NavBar: React.FC = () => {
  return (
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
            <i className={item.icon}></i> {item.name}
          </Link>
        )
      })}
    </ul>
  )
}

export default NavBar
