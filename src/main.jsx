import './style/normalize.css';
import './style/variables.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
