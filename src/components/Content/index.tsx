import AboutMe from './AboutMe'
import Education from './Education'
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
      <Education />
    </div>
  )
}

export default Content
