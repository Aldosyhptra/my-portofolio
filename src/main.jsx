import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
// Font self-host (tanpa layanan pihak ketiga, sesuai AGENTS §8.4).
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import './index.css'
import App from './App.jsx'

// Smooth scroll Lenis; wheel dimatikan bila pengguna minta reduced motion (AGENTS §7).
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* reducedMotion="user": animasi transform dilewati saat prefers-reduced-motion aktif */}
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={{ lerp: 0.1, smoothWheel: !reduceMotion }}>
        <App />
      </ReactLenis>
    </MotionConfig>
  </StrictMode>,
)