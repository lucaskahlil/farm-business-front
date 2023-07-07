import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/main.sass'
import Categorys from './components/categorys'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Categorys />
  </React.StrictMode>,
)
