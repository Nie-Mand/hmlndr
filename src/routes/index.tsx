import About from '~/core/About'
import Contact from '~/core/Contact'
import Extra from '~/core/Extra'
import Hero from '~/core/hero'
import Projects from '~/core/projects'

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Extra />
      <Contact />
    </div>
  )
}
