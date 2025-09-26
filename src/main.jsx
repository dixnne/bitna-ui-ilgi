/**
 * The main entry point for the React application.
 * This file is responsible for rendering the root `App` component into the DOM.
 * It uses React's `createRoot` API for concurrent mode and wraps the `App`
 * in `StrictMode` to highlight potential problems in the application.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)