import Hero from './core/Hero'

function App() {
  return (
    <div>
      <Hero />
      <div className="relative z-10 bg-white h-screen">
        <h1 className="font-bold">hello world</h1>
      </div>
      <div className="relative z-10 bg-white h-screen" id="contact">
        <h1 className="font-bold">contact me</h1>
      </div>
    </div>
  )
}

export default App
