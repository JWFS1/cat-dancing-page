import { DANCES, SPEEDS } from '../hooks/useAnimation'

export default function AnimationControls({ isPlaying, onToggle, dance, onDance, speed, onSpeed }) {
  return (
    <section className="controls" aria-label="애니메이션 제어">
      <button type="button" className="play-btn" onClick={onToggle} aria-pressed={isPlaying}>
        {isPlaying ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>

      <fieldset className="group">
        <legend>춤 동작</legend>
        <div className="chips" role="radiogroup" aria-label="춤 동작">
          {DANCES.map((d, i) => (
            <button
              key={d.id}
              type="button"
              role="radio"
              aria-checked={dance === d.id}
              className={`chip ${dance === d.id ? 'active' : ''}`}
              onClick={() => onDance(d.id)}
              title={`단축키 ${i + 1}`}
            >
              <span aria-hidden="true">{d.emoji}</span> {d.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="group">
        <legend>속도</legend>
        <div className="chips" role="radiogroup" aria-label="속도">
          {SPEEDS.map((s) => (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={speed === s.id}
              className={`chip ${speed === s.id ? 'active' : ''}`}
              onClick={() => onSpeed(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="hint">
        고양이를 클릭하거나 <kbd>Space</kbd> 키로 시작/정지 · <kbd>1</kbd>–<kbd>4</kbd> 키로 춤 변경
      </p>
    </section>
  )
}
