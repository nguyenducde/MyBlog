import { useEffect, useState } from 'react'

const AboutMe: React.FC = () => {
  const [age, setAge] = useState<number>(0)
  const YEAR = 1999

  useEffect(() => {
    const currentYear = new Date().getFullYear()

    setAge(currentYear - YEAR)
  }, [age])

  return (
    <section className='about-me' id='about-me'>
      <p className='content__title'>About me</p>
      <div className='about-me__group'>
        <div className='about-me__avatar'>
          <img
            src='/images/logo/avatar.png'
            alt='Avatar'
            data-aos='fade-right'
            data-aos-duration='800'
          />
        </div>
        <div className='about-me__info' data-aos='fade-up'>
          <p className='about-me__info-text'>
            My name is De <span>({age} years old)</span>. I&apos;m a Front-end web developer. I
            love to learn Front-end, technologies and beautiful UX/UI design. Apply learned
            knowledge to design and build web applications. I look forward to learning new skills
            and challenging myself whenever possible.
          </p>
          <p className='about-me__info-text'>
            Other than coding, I spend most of my free time listening to music and reading books.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
