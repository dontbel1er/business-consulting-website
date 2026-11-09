import { useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'motion/react'

/* ==========================================================================
   Spring presets
   Apple's house style: critically damped by default. Bounce is reserved for
   motion that carried momentum of its own.
   ========================================================================== */
export const SPRING = { type: 'spring', bounce: 0, duration: 0.4 }
export const SPRING_SOFT = { type: 'spring', bounce: 0, duration: 0.65 }
export const SPRING_MOMENTUM = { type: 'spring', bounce: 0.2, duration: 0.4 }
export const SPRING_SNAP = { type: 'spring', bounce: 0, duration: 0.3 }

/* Mirrored easing pair — the exit path is the inverse of the enter path. */
export const EASE_OUT = [0.16, 1, 0.3, 1]
export const EASE_IN = [0.7, 0, 0.84, 0]

/* ==========================================================================
   Reveal-on-scroll

   IntersectionObserver alone is not enough: a fast flick, an End keypress or an
   anchor jump can skip straight past an element, leaving it stranded at
   opacity 0 forever. A rect check on scroll closes that hole — once the
   element's top has passed the fold, it is revealed whether or not the
   observer ever saw it.
   ========================================================================== */
const subscribers = new Set()
let ticking = false

function flush() {
  ticking = false
  subscribers.forEach((fn) => fn())
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(flush)
}

function subscribe(fn) {
  subscribers.add(fn)
  if (subscribers.size === 1) {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    document.addEventListener('visibilitychange', onVisibility)
  }
  return () => {
    subscribers.delete(fn)
    if (subscribers.size === 0) {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }
}

/* A backgrounded tab throttles rAF and IntersectionObserver. When the visitor
   comes back, everything pending gets one more chance to be measured. */
function onVisibility() {
  if (document.visibilityState !== 'visible') return
  flush()
}

/**
 * @param {number} trigger fraction of the viewport height at which the
 *   element is considered reached.
 */
export function useRevealed(trigger = 0.92) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (revealed) return
    const el = ref.current
    if (!el) return

    const check = () => {
      if (revealed) return
      const rect = el.getBoundingClientRect()
      /* Top has crossed the fold: either it is arriving, or it was passed. */
      if (rect.top < window.innerHeight * trigger) setRevealed(true)
    }

    check()

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setRevealed(true)
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.01 }
    )
    io.observe(el)

    const unsubscribe = subscribe(check)
    return () => {
      io.disconnect()
      unsubscribe()
    }
  }, [revealed, trigger])

  return [ref, revealed]
}

const MOTION_TAGS = {
  div: motion.div,
  span: motion.span,
  ul: motion.ul,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  p: motion.p
}

/**
 * Materialise on scroll: content rises into place once, then stays.
 * Reduced motion keeps the fade and drops the travel.
 */
export function Reveal({ children, delay = 0, y = 26, as = 'div', className = '', style, ...rest }) {
  const [ref, revealed] = useRevealed()
  const reduce = useReducedMotion()
  const Tag = MOTION_TAGS[as] || motion.div

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ type: 'spring', bounce: 0, duration: 0.6, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Counts up to its value the first time it reaches the viewport.
 * Rendered through a MotionValue so no re-render happens per frame.
 */
export function CountUp({ value, suffix = '', className }) {
  const [ref, revealed] = useRevealed(0.85)
  const reduce = useReducedMotion()
  const counter = useMotionValue(reduce ? value : 0)
  const text = useTransform(counter, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (!revealed) return
    if (reduce) {
      counter.set(value)
      return
    }
    const controls = animate(counter, value, { duration: 1.4, ease: EASE_OUT })
    return () => controls.stop()
  }, [revealed, value, reduce, counter])

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  )
}

/** True when the visitor has asked the system to calm down. */
export function useCalm() {
  return !!useReducedMotion()
}
