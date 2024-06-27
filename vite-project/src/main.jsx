import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from'./ProductData/Store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

const uri = 'https://dev-u80dp0ysiq815q8d.us.auth0.com/u/login?state=hKFo2SBSdDYzSWNod1hIa3dvWEpZcndidTRtVjRfbjVJc3lnOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFpxZUVueWdFZ2tqd0xIY1lnajU5WVpxekFTeGE3dk5No2NpZNkgNzVDcGlkeWg1TTBKZVM1WnBaTENTTzd3dHpxVTRQNEk'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain="dev-u80dp0ysiq815q8d.us.auth0.com"
    clientId="75Cpidyh5M0JeS5ZpZLCSO7wtzqU4P4I"
    authorizationParams={{
      redirect_uri: {uri}
    }}
  >
    <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
)
