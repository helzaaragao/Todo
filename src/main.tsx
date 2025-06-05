import React from 'react'
import ReactDOM from 'react-dom/client'
import { App }  from './App.tsx'
import './global.css'

console.log('React está sendo carregado!')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
