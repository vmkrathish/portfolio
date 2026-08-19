import { useEffect, useState } from 'react'

/**
 * Tracks the user's `prefers-reduced-motion` preference so components can
 * disable or simplify non-essential animation.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const handler = (e) => setReduced(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return reduced
}
