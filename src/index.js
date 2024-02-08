import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-mb8r7vz3xv6btqse.us.auth0.com"
  clientId="JeMtEzsw1ypLE6hJ72bZeRD70Kc4sbhB"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
  </Auth0Provider>
);


