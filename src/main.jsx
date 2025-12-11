import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './context/Provider.jsx';
import { ProfileProvider } from './context/UserName.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
    <ProfileProvider>
      <App />
    </ProfileProvider>
    </CounterProvider>
  </StrictMode>,
)
