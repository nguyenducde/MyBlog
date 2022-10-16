import { useDispatch, useSelector } from 'react-redux'
import { setIsDarkMode } from '../redux/darkModeSlice'
import { RootState } from '../redux/store'

const DarkMode: React.FC = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector<RootState>((state) => state.isDarkMode)

  const handleChecked = () => {
    dispatch(setIsDarkMode(!isDarkMode))
  }

  return (
    <div className={`dark-mode ${isDarkMode ? 'dark-theme' : ''}`}>
      <i
        className={`fas fa-sun dark-mode__icon-light ${!isDarkMode ? 'active-light' : ''}`}
        data-aos={isDarkMode ? 'zoom-in' : ''}
        data-aos-duration='800'
      ></i>
      <input type='checkbox' className='dark-mode__input' onClick={handleChecked} />
      <i
        className={`fas fa-moon dark-mode__icon-dark ${isDarkMode ? 'active-dark' : ''}`}
        data-aos={!isDarkMode ? 'zoom-in' : ''}
        data-aos-duration='800'
      ></i>
    </div>
  )
}

export default DarkMode
