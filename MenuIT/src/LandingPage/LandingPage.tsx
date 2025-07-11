import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const LandingPage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "var(--spacing-20) var(--spacing-4)",
      }}
    >
      <h1
        style={{
          color: "var(--primary-900)",
          fontSize: "var(--text-5xl)",
          marginBottom: "var(--spacing-4)",
        }}
      >
        Bienvenido a MenuIT
      </h1>
      <p
        style={{
          color: "var(--neutral-600)",
          fontSize: "var(--text-xl)",
          marginBottom: "var(--spacing-8)",
        }}
      >
        La solución digital para el menú de tu restaurante.
      </p>
      <div>
        {isAuthenticated ? (
          <>
            <Link
              to="/profile"
              style={{
                margin: "0.5rem",
                padding: "0.8rem 1.5rem",
                backgroundColor: "var(--btn-primary-bg)",
                color: "white",
                textDecoration: "none",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              Ir al Perfil
            </Link>
            <button
              onClick={logout}
              style={{
                margin: "0.5rem",
                padding: "0.8rem 1.5rem",
                backgroundColor: "var(--btn-secondary-bg)",
                color: "white",
                border: "none",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                margin: "0.5rem",
                padding: "0.8rem 1.5rem",
                backgroundColor: "var(--btn-primary-bg)",
                color: "white",
                textDecoration: "none",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              style={{
                margin: "0.5rem",
                padding: "0.8rem 1.5rem",
                backgroundColor: "var(--neutral-700)",
                color: "white",
                textDecoration: "none",
                borderRadius: "var(--border-radius-md)",
              }}
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
