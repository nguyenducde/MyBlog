import Link from 'next/link'
import mockSocialMediaData from '../../../mock-data/mockSocialMediaData'

const Home: React.FC = () => {
  return (
    <section className='home'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/Done.jpg?alt=media&token=80ed91ac-df53-4464-98f1-18d71b62668d'
        alt='Avatar'
        className='home__avatar'
      />
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
