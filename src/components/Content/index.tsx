import AboutMe from './AboutMe'
import Home from './Home'
import Skills from './Skills'

const Content: React.FC = () => {
  return (
    <div className='content'>
      <Home />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default Content
