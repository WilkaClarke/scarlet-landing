import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeGoogleAnalytics } from './analytics.js'
import './index.css'

initializeGoogleAnalytics()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
