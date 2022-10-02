const AboutMe: React.FC = () => {
  return (
    <section className='about-me'>
      <p className='content__title'>About me</p>
      <div className='about-me__group'>
        <div style={{ position: 'relative', width: '300px' }}>
          <img src='/images/logo/avatar.jpg' alt='Avatar' className='about-me__avatar' />
        </div>
        <div className='about-me__info'>
          <p className='about-me__info-text'>
            My name is Quang <span>(23 years old)</span>. I&apos;m a Front-end web developer. I love
            to learn Front-end, technologies and beautiful UX/UI design. Apply learned knowledge to
            design and build web applications. I look forward to learning new skills and challenging
            myself whenever possible.
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
