import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./login/Login";
import Register from "./login/Register";
import Profile from "./auth/Profile";
import { useAuth } from "./auth/AuthContext";
import MainLayout from "./components/MainLayout";
import CareersPage from "./pages/CareersPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ServiceStatusPage from "./pages/ServiceStatusPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import DocumentationPage from "./pages/DocumentationPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductFeaturesPage from "./pages/ProductFeaturesPage";
import AdminMenu from "./adminmenu/AdminMenu";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <ErrorBoundary>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/adminmenu" /> : <Login />}
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? <Navigate to="/adminmenu" /> : <Register />
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/adminmenu" element={<AdminMenu />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/carrera" element={<CareersPage />} />
            <Route
              path="/politica-de-privacidad"
              element={<PrivacyPolicyPage />}
            />
            <Route path="/estado-de-servicio" element={<ServiceStatusPage />} />
            <Route path="/centro-de-ayuda" element={<HelpCenterPage />} />
            <Route path="/documentacion" element={<DocumentationPage />} />{" "}
            <Route path="/contacto" element={<ContactPage />} />{" "}
            <Route path="/acerca-de" element={<AboutPage />} />{" "}
            <Route path="/caracteristicas" element={<ProductFeaturesPage />} />{" "}
            {/*  <Route path="/contacto" element={<ContactPage />} /> */}
            {/* <Route path="/acerca-de" element={<AboutPage />} /> */}
          </Route>
        </Routes>
      </main>
    </ErrorBoundary>
  );
};

const App: React.FC = () => {
  return <AppContent />;
};

export default App;
