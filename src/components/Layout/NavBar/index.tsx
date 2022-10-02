const NavBar: React.FC = () => {
  return (
    <ul className='navbar'>
      <li className='navbar__item active'>
        <i className='far fa-home'></i> Home
      </li>
      <li className='navbar__item'>
        <i className='far fa-user-check'></i> About me
      </li>
      <li className='navbar__item'>
        <i className='far fa-code'></i> Skills
      </li>
      <li className='navbar__item'>
        <i className='far fa-th-list'></i> Projects
      </li>
      <li className='navbar__item'>
        <i className='far fa-graduation-cap'></i> Education
      </li>
    </ul>
  )
}

export default NavBar
