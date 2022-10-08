import Link from 'next/link'
import ButtonProps from '../interface/buttonProps'

const CustomButton: React.FC<ButtonProps> = ({ label, href, icon }) => {
  return (
    <Link href={href}>
      <a className='btn' target='_blank'>
        {label}
        {icon ? <i className={`${icon} btn__icon`}></i> : ''}
      </a>
    </Link>
  )
}

export default CustomButton
