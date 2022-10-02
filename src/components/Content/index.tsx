import AboutMe from './AboutMe'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

const Content: React.FC = () => {
  return (
    <div className='content'>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Content
