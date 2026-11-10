import { useCallback, useEffect, useState } from 'react'

export const DANCES = [
  { id: 'groove', label: '그루브', emoji: '🕺' },
  { id: 'jump', label: '점프', emoji: '⬆️' },
  { id: 'spin', label: '회전', emoji: '🌀' },
  { id: 'wiggle', label: '흔들기', emoji: '〰️' },
]

export const SPEEDS = [
  { id: 'slow', label: '느리게', value: 1.6 },
  { id: 'normal', label: '보통', value: 1 },
  { id: 'fast', label: '빠르게', value: 0.6 },
]

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  )
}

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion())
  const [dance, setDance] = useState(DANCES[0].id)
  const [speed, setSpeed] = useState(SPEEDS[1].id)

  const toggle = useCallback(() => setIsPlaying((p) => !p), [])

  // 키보드 단축키: Space/K = 재생 토글, 1~4 = 춤 선택
  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return
      if (e.key === 'k' || (e.key === ' ' && tag !== 'BUTTON')) {
        e.preventDefault()
        toggle()
      }
      const idx = Number(e.key) - 1
      if (idx >= 0 && idx < DANCES.length) setDance(DANCES[idx].id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle])

  const duration = SPEEDS.find((s) => s.id === speed).value

  return { isPlaying, toggle, dance, setDance, speed, setSpeed, duration }
}
