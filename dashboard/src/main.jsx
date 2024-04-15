import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginContextProvider } from './components/Contexts/LoginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>,
)
