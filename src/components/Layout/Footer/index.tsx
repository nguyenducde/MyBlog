import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <section className='footer'>
      <div className='footer__group'>
        <p>Developed and designed by </p>
        <Link href='https://www.facebook.com/fb.luongtuyenquang'>
          <a target='_blank' className='footer__link'>
            Lương Tuyên Quang
          </a>
        </Link>
      </div>
      <p className='footer__copyright'>© 2022 - Copyright</p>
    </section>
  )
}

export default Footer
