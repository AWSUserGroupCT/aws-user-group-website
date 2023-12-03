import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Menu from "./components/core/Menu.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

if (!domain || !clientId) {
  throw new Error("Missing Auth0 configuration");
}

ReactDOM.createRoot(document.getElementById("root")!).render(

  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
