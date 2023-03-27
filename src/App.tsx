import Contact from './core/Contact'
import Extra from './core/Extra'
import Hero from './core/Hero'

function App() {
  return (
    <div>
      <Hero />
      <div className="relative  bg-white h-screen">
        <h1 className="font-bold">hello world</h1>
      </div>
      <Extra />
      <Contact />
    </div>
  )
}

export default App
