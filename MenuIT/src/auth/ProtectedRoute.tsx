import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute: React.FC = () => {
  // Usamos el hook para obtener el estado de autenticación.
  const { isAuthenticated } = useAuth();

  // Si el usuario está autenticado, renderiza el contenido de la ruta (Outlet).
  // Si no, lo redirige a la página de login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
