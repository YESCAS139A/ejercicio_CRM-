import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "./layout/AppRouter";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="w-screen h-screen overflow-hidden bg-slate-50">
      <AppRouter />
    </div>
  </React.StrictMode>,
)