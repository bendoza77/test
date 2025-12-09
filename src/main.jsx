import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import { CarProvider } from './context/CarContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CarProvider>
            <App />
        </CarProvider>
    </BrowserRouter>
)
