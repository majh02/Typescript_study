import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import App2 from './react-query/App2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
