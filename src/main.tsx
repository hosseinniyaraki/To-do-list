
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeForm from './pages/ThemeForm.tsx'
import Simpleformm from './pages/simpleformm.tsx'
import SimpleForm from './pages/SimpleForm.tsx'
import Practis from './pages/practis.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Practis/>
    {/* <ThemeForm/> */}  
    {/* <SimpleForm /> */}

  </StrictMode>
)
