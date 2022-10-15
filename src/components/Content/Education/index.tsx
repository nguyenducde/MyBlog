const Education: React.FC = () => {
  return (
    <section className='education' id='education'>
      <p className='content__title'>Education</p>
      <div className='education__group'>
        <img src='/images/logo/DLU.png' alt='Image' data-aos='fade-down-right' />
        <p className='education__time' data-aos='fade-down-left'>
          2017 - 2021
        </p>
        <p className='education__university' data-aos='fade-up'>
          Da Lat university
        </p>
        <p className='education__major'>Engineer&apos;s degree, Information Technology</p>
      </div>
    </section>
  )
}

export default Education
