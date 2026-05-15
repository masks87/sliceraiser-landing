import { useEffect, useState } from 'react'

const LABELS = ['Hero', 'Overview', 'Properties', 'Locations', 'Invest']

export default function SectionDots() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.snap-section'))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (idx: number) => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.snap-section'))
    sections[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
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
      {LABELS.map((label, i) => (
        <div
          key={i}
          style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Tooltip label */}
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

          {/* Dot */}
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
