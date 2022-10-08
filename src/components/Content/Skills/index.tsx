import * as mockSkillsData from '../../../mock-data/mockSkillsData'

const Skills: React.FC = () => {
  return (
    <section className='skills' id='skills'>
      <p className='content__title'>Skills</p>
      <div className='skills__group'>
        <p className='skills__title'>Framework: </p>
        <div className='skills__list'>
          {mockSkillsData.frameworkData.map((item) => {
            return (
              <div className='skills__item' key={item.id}>
                <img src={item.link} alt='Image' className='skills__item-logo' />
                <span className='skills__item-name'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Programming Language: </p>
        <div className='skills__list'>
          {mockSkillsData.programmingLanguageData.map((item) => {
            return (
              <div className='skills__item' key={item.id}>
                <img src={item.link} alt='Image' className='skills__item-logo' />
                <span className='skills__item-name'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Web Design: </p>
        <div className='skills__list'>
          {mockSkillsData.webDesignData.map((item) => {
            return (
              <div className='skills__item' key={item.id}>
                <img src={item.link} alt='Image' className='skills__item-logo' />
                <span className='skills__item-name'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Version Control: </p>
        <div className='skills__list'>
          {mockSkillsData.versionControlData.map((item) => {
            return (
              <div className='skills__item' key={item.id}>
                <img src={item.link} alt='Image' className='skills__item-logo' />
                <span className='skills__item-name'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='skills__group'>
        <p className='skills__title'>Other: </p>
        <div className='skills__list'>
          {mockSkillsData.otherData.map((item) => {
            return (
              <div className='skills__item' key={item.id}>
                <img src={item.link} alt='Image' className='skills__item-logo' />
                <span className='skills__item-name'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
