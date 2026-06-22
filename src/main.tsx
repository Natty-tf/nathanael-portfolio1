import React from 'react'
import ReactDOM from 'react-dom/client'
// Explicitly include the .tsx extension to ensure the module is resolved by TypeScript
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)