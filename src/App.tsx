import { useCallback, useState } from 'react'

function getQuote(l: string) {
  switch (l) {
    case 'H':
      return 'HEAD\'s up, I\'m a Full Stack Dev'
    case 'M':
      return 'Mine are Git Pushes and Millions'
    case 'L':
      return 'Lit it up, like Docker on my PC'
    case 'N':
      return 'NO JAVA, NO PHP, NO JAVASCRIPT'
    case 'D':
      return 'DevOps & Cloud, My Fav Job'
    case 'R':
      return 'REACT 4EVER, REACT 4LIFE'
    default:
      return 'I Code for the fun of it'
  }
}

function useHMLDNRLetter() {
  const [l, setL] = useState('')
  const enter = useCallback((l: string) => {
    setL(l)
  }, [])

  const out = useCallback(() => {
    setL('')
  }, [])

  return { l, enter, out }
}

function App() {
  const hmldnr = useHMLDNRLetter()

  return (
    <div>
      <div className="h-screen grid place-content-center">
        <div>
          <h1 className="font-black text-5xl md:text-7xl text-center">
            {'HMLNDR'.split('').map(l => (
              <span
                onMouseEnter={() => hmldnr.enter(l)}
                onMouseLeave={hmldnr.out}
                key={l}
                className="relative after:w-full after:bg-black after:h-2 after:absolute after:top-full after:left-0 after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:ease-in-out"
              >
                {l}
              </span>
            ))}
          </h1>

          <q className="py-10 flex items-center justify-center font-medium group">
            <div className="w-0 group-hover:w-4 duration-300 ease-in-out"></div>
            <span className="text-xl">{getQuote(hmldnr.l)}</span>
            <div className="w-0 group-hover:w-4 duration-300 ease-in-out"></div>
          </q>
        </div>
      </div>
      <h1 className="font-bold">hello world</h1>
    </div>
  )
}

export default App
