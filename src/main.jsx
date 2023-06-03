import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './Store/store'
import { Provider } from 'react-redux'
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
        <App />
        {console.log("storedetails",store)}
        </StrictMode>
    </Provider>

)
