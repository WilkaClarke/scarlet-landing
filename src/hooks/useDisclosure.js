import { useCallback, useState } from 'react'

/**
 * Generic open/close state with stable callbacks.
 * `open()` / `close()` / `toggle()` avoid re-creating handlers on every render.
 */
export default function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  return { isOpen, open, close, toggle }
}
