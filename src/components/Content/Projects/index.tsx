import mockProjectsData from '../../../mock-data/mockProjectsData'
import CustomButton from '../../CustomButton'

const Projects: React.FC = () => {
  return (
    <section className='projects' id='projects'>
      <p className='content__title'>Projects</p>
      <div className='projects__list'>
        {mockProjectsData.map((item) => {
          return (
            <div className='projects__item' key={item.id}>
              <img
                src={item.image}
                alt='Image'
                className='projects__item-image'
                data-aos='zoom-in'
                ata-aos-duration='700'
              />
              <div className='projects__group'>
                <p
                  className='projects__item-name'
                  data-aos='fade-down-left'
                  data-aos-duration='700'
                >
                  {item.name}
                </p>
                <p className='projects__item-technology' data-aos='fade-up' data-aos-duration='700'>
                  {item.technology}
                </p>
              </div>
              <CustomButton
                label='Live view'
                href={item.link}
                icon='fal fa-arrow-right'
                target='_blank'
                data_aos='zoom-out-down'
                data_aos_duration='800'
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
