const Skills: React.FC = () => {
  return (
    <section className='skills'>
      <p className='content__title'>Skills</p>
      <div className='skills__group'>
        <p className='skills__title'>Framework: </p>
        <div className='skills__list'>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Freact.png?alt=media&token=fa0263cd-f192-4989-8326-f09987c1d34d'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>ReactJS</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fnextjs.png?alt=media&token=5b286808-167d-4058-8f4f-ddde2e502e69'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>NextJS</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fredux.png?alt=media&token=f5c47c53-7310-40f7-bae9-2860b4853b7e'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>Redux</span>
          </div>
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Programming Language: </p>
        <div className='skills__list'>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fjavascript.png?alt=media&token=975b3d39-2726-486c-8819-64e6d6eff259'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>JavaScript</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Ftypescript.svg?alt=media&token=4592bce6-59c3-4179-8dd6-231ae8b6c358'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>TypeScript</span>
          </div>
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Web Design: </p>
        <div className='skills__list'>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fhtml5.png?alt=media&token=0170d3b6-1911-4ca5-af5d-619dc868c465'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>HTML5</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fcss3.png?alt=media&token=e7906f35-a496-4e6e-89b2-e10e6b542373'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>CSS3</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fsass.png?alt=media&token=55f8e585-c03f-497e-8f9a-8fab20533728'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>SCSS</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fbootstrap.png?alt=media&token=e3b26f47-b2c2-41af-b4d2-484949c83da4'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>Bootstrap</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fmui.png?alt=media&token=4fc9d7fb-4365-4c76-8085-9dbd87c0ab88'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>MUI</span>
          </div>
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Version Control: </p>
        <div className='skills__list'>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fgit.png?alt=media&token=6ac334cf-b99c-4265-a052-b3de4e4ea0d6'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>Git</span>
          </div>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Fgithub.png?alt=media&token=203d1562-6444-43df-8f6b-66e4edef3d9f'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>Github</span>
          </div>
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Other: </p>
        <div className='skills__list'>
          <div className='skills__item'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/learn-firebase-e9f67.appspot.com/o/images-logo%2Ffirebase.png?alt=media&token=dedfa2c1-7903-4b25-8c3d-52d16b80bebc'
              alt='Image'
              className='skills__item-logo'
            />
            <span className='skills__item-name'>Firebase</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
