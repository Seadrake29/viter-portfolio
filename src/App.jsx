import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StoreProvider } from "../store/StoreContext";

import SettingsExperience from "./components/pages/developer/settings/experience/SettingsExperience";

import ServiceList from "./components/pages/developer/settings/service/ServiceList";
import MainServiceList from "./components/pages/developer/service/MainServiceList";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                <div className="h-dvh w-dvh flex items-center justify-center">
                  <h3>Page Not Found.</h3>
                </div>
              }
            />

            <Route
              path="/settings/myexperience"
              element={<SettingsExperience />}
            />
            <Route path="/settings/myservice" element={<ServiceList />} />
            <Route path="/service" element={<MainServiceList />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}
