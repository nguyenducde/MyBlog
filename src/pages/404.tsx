import Head from 'next/head'
import CustomButton from '../components/CustomButton'

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>

      <section className='not-found'>
        <div className='not-found__group'>
          <div className='not-found__content'>
            <span className='not-found__title'>Sorry!</span>
            <p className='not-found__description'>
              We can&apos;t find the page you are looking for.
            </p>
            <CustomButton
              href='/'
              label='Go Home'
              className='not-found__btn'
              icon='far fa-chevron-right'
            />
          </div>
          <img src='/images/logo/not_found.svg' alt='logo_notfound' className='not-found__image' />
        </div>
      </section>
    </>
  )
}

export default NotFound
