import Link from 'next/link'
import mockProjectsData from '../../../mock-data/mockProjectsData'

const Projects: React.FC = () => {
  return (
    <section className='projects' id='projects'>
      <p className='content__title'>Projects</p>
      <div className='projects__list'>
        {mockProjectsData.map((item) => {
          return (
            <div className='projects__item' key={item.id}>
              <img src={item.image} alt='Image' className='projects__item-image' />
              <div className='projects__group'>
                <p className='projects__item-name'>{item.name}</p>
                <p className='projects__item-technology'>{item.technology}</p>
              </div>
              <Link href={item.link}>
                <a className='btn' target='_blank'>
                  Live view
                  <i className='fal fa-arrow-right btn__icon'></i>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
