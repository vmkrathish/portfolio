import { useEffect, useState } from 'react'

/**
 * Observes a set of section ids and reports which one is currently most
 * visible, for driving active-state highlighting in the navigation.
 */
const DEFAULT_OPTIONS = { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }

export default function useScrollSpy(ids, options) {
  const [activeId, setActiveId] = useState(ids[0])

  // eslint-disable-next-line react-hooks/exhaustive-deps -- ids is expected to be a stable reference
  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        setActiveId(visible[0].target.id)
      }
    }, options || DEFAULT_OPTIONS)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
