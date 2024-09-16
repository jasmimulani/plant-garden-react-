import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from'./ProductData/Store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
     domain="dev-eng2whc0oi5woca1.us.auth0.com"
    clientId="rrsxB1BNBWo8OWpYgCV6wN7Uzh9AfY8q"
      authorizationParams={{
        redirect_uri: window.location.origin
    }}
  >
    <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
)
