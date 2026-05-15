import { useEffect, useRef, useState } from 'react'

const SECTION_LABELS: Record<string, string> = {
  'hero':       'Hero',
  'overview':   'Overview',
  'properties': 'Properties',
  'locations':  'Locations',
  'invest':     'Invest',
}

function getVisibleSections(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>('.snap-section'))
    .filter(s => window.getComputedStyle(s).display !== 'none')
}

export default function SectionDots() {
  const [active, setActive]   = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [labels, setLabels]   = useState<string[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  const rebuildDots = () => {
    observerRef.current?.disconnect()

    const sections = getVisibleSections()
    setLabels(sections.map(s => SECTION_LABELS[s.dataset.label ?? ''] ?? ''))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const visible = getVisibleSections()
            const idx = visible.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach(s => observer.observe(s))
    observerRef.current = observer
  }

  useEffect(() => {
    // Use rAF to ensure Tailwind responsive classes are computed
    const frame = requestAnimationFrame(rebuildDots)

    const onResize = () => rebuildDots()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      observerRef.current?.disconnect()
    }
  }, [])

  const goTo = (idx: number) => {
    const sections = getVisibleSections()
    sections[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!labels.length) return null

  return (
    <div
      className="section-dots-nav"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        zIndex: 200,
      }}
    >
      {labels.map((label, i) => (
        <div
          key={i}
          style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <div
            style={{
              position: 'absolute',
              right: '22px',
              whiteSpace: 'nowrap',
              background: 'rgba(2,8,23,0.75)',
              color: '#fff',
              fontSize: '12px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              padding: '4px 10px',
              borderRadius: '6px',
              pointerEvents: 'none',
              opacity: hovered === i ? 1 : 0,
              transform: hovered === i ? 'translateX(0)' : 'translateX(6px)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            {label}
          </div>

          <button
            onClick={() => goTo(i)}
            aria-label={`Go to ${label}`}
            style={{
              width: active === i ? '13px' : '8px',
              height: active === i ? '13px' : '8px',
              borderRadius: '50%',
              background: active === i ? '#4285F4' : 'transparent',
              border: active === i ? 'none' : '1.5px solid rgba(66,133,244,0.55)',
              cursor: 'pointer',
              padding: 0,
              outline: 'none',
              transition: 'all 0.25s ease',
              boxShadow: active === i ? '0 0 0 3px rgba(66,133,244,0.18)' : 'none',
              flexShrink: 0,
            }}
          />
        </div>
      ))}
    </div>
  )
}
