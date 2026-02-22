import { useInView } from '../hooks/useInView'

export default function AnimatedSection({ children, className = '', stagger = false }) {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -80px 0px', threshold: 0.08 })
  const scrollClass = stagger ? 'animate-stagger-children' : 'animate-on-scroll'
  return (
    <div
      ref={ref}
      className={`${scrollClass} ${inView ? 'in-view' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
