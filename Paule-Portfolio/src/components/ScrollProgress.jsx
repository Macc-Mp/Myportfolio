import React, { useEffect, useState } from 'react'
import '../css/index.css'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight || document.body.scrollHeight
      const clientHeight = doc.clientHeight
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100
      setProgress(Number.isFinite(scrolled) ? Math.min(100, Math.max(0, scrolled)) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="scroll-progress-root" aria-hidden>
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
