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
    domain="dev-u80dp0ysiq815q8d.us.auth0.com"
    clientId="75Cpidyh5M0JeS5ZpZLCSO7wtzqU4P4I"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
)
