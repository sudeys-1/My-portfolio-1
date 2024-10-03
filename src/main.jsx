
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>


  <App />
  <Toaster
  position="top-right"
  reverseOrder={false}
/>
  </BrowserRouter>
)
