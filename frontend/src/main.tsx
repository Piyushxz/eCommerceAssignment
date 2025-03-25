import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './store.ts'
import App from './App.tsx'
import {Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors position='top-center' />

  <Provider store={store}>
  <App  />

  </Provider >

  
  </StrictMode>,
)
