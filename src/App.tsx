import "@telegram-apps/telegram-ui/dist/styles.css";
import { useIntegration } from "@tma.js/react-router-integration";
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from "@tma.js/sdk-react";
import { useEffect, useMemo } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { AppRoot } from "@telegram-apps/telegram-ui";

function App() {
  const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
  const [location, reactNavigator] = useIntegration(navigator);
  const miniApp = useMiniApp();
  const lp = useLaunchParams();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  useEffect(() => {
    miniApp.ready();
    return miniApp.close();
  }, []);

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <Router location={location} navigator={reactNavigator}>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AppRoot>
  );
}

export default App;
