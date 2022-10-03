import { useState } from 'react'

const DarkMode: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChecked = () => {
    const checkbox = document.querySelector('#checkbox') as HTMLInputElement
    if (checkbox.checked) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }

  return (
    <div className={`dark-mode ${isChecked ? 'dark-icon' : ''}`}>
      <i className={`fas fa-sun dark-mode__icon-light ${!isChecked ? 'active-light' : ''}`}></i>
      <input type='checkbox' id='checkbox' onClick={handleChecked} />
      <i className={`fas fa-moon dark-mode__icon-dark ${isChecked ? 'active-dark' : ''}`}></i>
    </div>
  )
}

export default DarkMode
