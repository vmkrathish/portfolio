import { motion } from 'framer-motion'
import useReducedMotion from '../hooks/useReducedMotion'

/**
 * Shared scroll-reveal wrapper used across sections so that entrance
 * animation is consistent, subtle, and respects reduced-motion preference.
 */
export default function Reveal({
  children,
  as: Component = motion.div,
  delay = 0,
  y = 22,
  duration = 0.7,
  className,
  once = true,
  ...rest
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    const Plain = Component === motion.div ? 'div' : Component
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    )
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
