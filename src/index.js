import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ryixmc3kebvuasqw.us.auth0.com"
    clientId="kYoneI6PkTlir5Fwr2V0TbHDjqmCFn79"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
