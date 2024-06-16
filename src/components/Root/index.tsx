import { SDKProvider, useLaunchParams } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import App from "../../App";
import { useEffect, useMemo } from "react";

export default function Root() {
  const debug = useLaunchParams().startParam === "debug";
  const manifestUrl = useMemo(() => {
    return new URL("tonconnect-manifest.json", window.location.href).toString();
  }, []);

  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider debug={debug} acceptCustomStyles>
        <App />
      </SDKProvider>
    </TonConnectUIProvider>
  );
}
