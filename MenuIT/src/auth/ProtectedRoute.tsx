// Tu archivo ProtectedRoute.tsx modificado
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <AuthenticatedLayout />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
