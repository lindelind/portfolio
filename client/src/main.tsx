import React from 'react'
import ReactDOM from 'react-dom/client'
import "../src/styles/main.scss"
import './index.scss';
import { Router } from './Router.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
