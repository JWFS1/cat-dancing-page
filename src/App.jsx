import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'

export default function App() {
  const { isPlaying, toggle, dance, setDance, speed, setSpeed, duration } = useAnimation()

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} dance={dance} duration={duration} onToggle={toggle} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        dance={dance}
        onDance={setDance}
        speed={speed}
        onSpeed={setSpeed}
      />
    </Layout>
  )
}
