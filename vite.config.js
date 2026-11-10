import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages(하위 경로)에서도 동작하도록 상대 경로로 빌드
  base: './',
  plugins: [react()],
  server: {
    // WSL2: 모든 인터페이스에 바인딩해 Windows 호스트에서 접속 가능하게 함
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
})
