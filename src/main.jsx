import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import AnimationsContextProvider from './context/AnimationsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AnimationsContextProvider>
            <App />
        </AnimationsContextProvider>
    </React.StrictMode>
)
