import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import WebApp from "@twa-dev/sdk";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://hamidrezaborghei.github.io/mazdaxbot/tonconnect-manifest.json">
      <AppRoot appearance="light">
        <App />
      </AppRoot>
    </TonConnectUIProvider>
  </React.StrictMode>
);
