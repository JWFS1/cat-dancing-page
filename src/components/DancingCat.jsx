import catUrl from '../assets/images/cat.svg'
import { DANCES } from '../hooks/useAnimation'

export default function DancingCat({ isPlaying, dance, duration, onToggle }) {
  const danceLabel = DANCES.find((d) => d.id === dance).label

  return (
    <div className="stage">
      <button
        type="button"
        className={`cat-button dance-${dance} ${isPlaying ? 'is-playing' : 'is-paused'}`}
        style={{ '--dance-duration': `${duration}s` }}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? `고양이 ${danceLabel} 춤 멈추기` : `고양이 ${danceLabel} 춤 시작하기`}
      >
        <span className="cat-mover">
          <img className="cat-img" src={catUrl} alt="" draggable="false" />
        </span>
        <span className="cat-shadow" aria-hidden="true" />
      </button>
      <div className="notes" aria-hidden="true">
        <span>♪</span>
        <span>♫</span>
        <span>♪</span>
      </div>
    </div>
  )
}
