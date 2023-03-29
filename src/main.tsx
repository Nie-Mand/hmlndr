import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './keyframes.css'
import './fonts.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FullLoading } from './core/Loading'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<FullLoading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
)
