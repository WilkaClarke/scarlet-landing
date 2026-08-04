import { useEffect } from 'react'

/** Locks page scroll while `locked` is true, restoring the previous value on cleanup. */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}
