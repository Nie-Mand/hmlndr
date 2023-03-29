import Footer from './core/Footer'
import Navbar from './core/Navbar'
import Routes from './core/routes'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes />
      <Footer />
    </>
  )
}

export default App
