import Link from 'next/link'
import mockSocialMediaData from '../../../mock-data/mockSocialMediaData'
import DarkMode from '../DarkMode'

const Home: React.FC = () => {
  return (
    <section className='home' id='home'>
      <DarkMode />
      <img src='/images/logo/avatar.jpg' className='home__avatar' alt='Avatar' />
      <p className='home__name'>Lương Tuyên Quang</p>
      <p className='home__subname'>I&apos;m a Front-end Web Developer</p>
      <div className='home__contact'>
        {mockSocialMediaData.map((item) => {
          return (
            <Link href={item.link} key={item.id}>
              <a className='home__link' target='_blank'>
                <i className={item.icon}></i>
              </a>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Home
