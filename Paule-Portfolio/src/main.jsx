import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <>
      <App />
      <SpeedInsights />
    </>
  </StrictMode>,
)