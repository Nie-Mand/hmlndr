import { useCallback, useState } from 'react'

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
