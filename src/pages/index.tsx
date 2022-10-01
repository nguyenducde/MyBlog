import type { NextPage } from 'next'
import Content from '../components/Content'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <main>
      <NavBar />
      <Content />
    </main>
  )
}

export default Home
