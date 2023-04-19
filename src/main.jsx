import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SidebarProvider from './Contexts/SidebarContext'
import CartProvider from './Contexts/CartContext'
import SearchContextProvider from './Contexts/SearchContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <SearchContextProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </SearchContextProvider>
  </SidebarProvider>,
)
