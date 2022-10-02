const AboutMe: React.FC = () => {
  return (
    <section className='about-me'>
      <p className='content__title'>About me</p>
      <div className='about-me__group'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/Done.jpg?alt=media&token=80ed91ac-df53-4464-98f1-18d71b62668d'
          alt='Avatar'
          className='about-me__avatar'
        />
        <div className='about-me__info'>
          <p className='about-me__info-text'>
            My name is Quang <span>(23 years old)</span>. I&apos;m a front-end web developer. I am
            passionate about coding and solving problems through code, and I am excited to work
            alongside other amazing programmers and learn so much more!
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
