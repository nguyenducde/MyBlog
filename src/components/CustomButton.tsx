import Link from 'next/link'
import ButtonProps from '../interface/buttonProps'

const CustomButton: React.FC<ButtonProps> = ({
  label,
  href,
  icon,
  className,
  target,
  data_aos,
  data_aos_duration,
}) => {
  return (
    <Link href={href}>
      <a
        className={`btn ${className}`}
        target={target}
        data-aos={data_aos}
        data-aos-duration={data_aos_duration}
      >
        {label}
        {icon ? <i className={`${icon} btn__icon`}></i> : ''}
      </a>
    </Link>
  )
}

export default CustomButton
