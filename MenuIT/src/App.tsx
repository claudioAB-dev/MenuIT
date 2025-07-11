import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import LandingPage from "./LandingPage/LandingPage";

const AppContent: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  );
};

const App: React.FC = () => {
  return <AppContent />;
};

export default App;
