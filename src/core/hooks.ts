import { useCallback, useEffect, useState } from 'react'

export function useHMLDNRLetter() {
  const [l, setL] = useState('')
  const enter = useCallback((l: string) => {
    setL(l)
  }, [])

  const out = useCallback(() => {
    setL('')
  }, [])

  return { l, enter, out }
}

export function useDelay() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const to = setTimeout(() => {
      setReady(true)
    }, 3000)

    return () => {
      clearTimeout(to)
    }
  }, [])

  return ready
}
