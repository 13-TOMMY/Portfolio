import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CombinedContextProvider from './context/CombinedContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CombinedContextProvider>
    <App />
    </CombinedContextProvider>
  </React.StrictMode>,
)
