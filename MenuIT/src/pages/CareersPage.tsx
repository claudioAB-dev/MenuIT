// src/pages/CareersPage.tsx
import React from "react";

const CareersPage: React.FC = () => {
  return (
    <div className="container" style={{ padding: "8rem 1rem 4rem" }}>
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Trabaja con Nosotros
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#4b5563" }}>
        Únete a un equipo innovador que está transformando la industria
        restaurantera.
      </p>
      <div style={{ marginTop: "2rem" }}>
        {/* Aquí puedes listar las vacantes */}
        <div
          style={{
            marginBottom: "1.5rem",
            padding: "1.5rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.75rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            Desarrollador Frontend React
          </h2>
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            Buscamos un desarrollador con experiencia en React, TypeScript y
            Tailwind CSS para ayudarnos a construir la mejor experiencia de
            usuario.
          </p>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#f97316",
              color: "white",
              borderRadius: "0.5rem",
            }}
          >
            Aplicar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
