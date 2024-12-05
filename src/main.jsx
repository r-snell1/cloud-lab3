import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import welcome from './Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <welcome />
  </StrictMode>,
)
