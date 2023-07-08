import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/main.sass'
import Home from './pages/home'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    < Home />
  </React.StrictMode>,
)
