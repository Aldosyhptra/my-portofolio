import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Font self-host (tanpa layanan pihak ketiga, sesuai AGENTS §8.4).
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)