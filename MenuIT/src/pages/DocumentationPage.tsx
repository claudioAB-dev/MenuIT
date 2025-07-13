import React, { useState } from "react";

const Introduction = () => (
  <div>
    <h2>Introducción</h2>
    <p>
      Bienvenido a la documentación de la API de MenuIT. Nuestra API está
      organizada en torno a los principios REST. Si no estás familiarizado con
      REST, te recomendamos leer una guía introductoria.
    </p>
    <p>Todas las respuestas de la API vienen en formato JSON estándar.</p>
    <h3>URL Base</h3>
    <pre style={codeBlockStyle}>https://api.menuit.com/v1</pre>
  </div>
);

const Authentication = () => (
  <div>
    <h2>Autenticación</h2>
    <p>
      Para utilizar la API de MenuIT, necesitas una clave de API. Puedes generar
      una desde tu panel de control en la sección "Desarrollador".
    </p>
    <p>
      La autenticación se realiza a través del encabezado{" "}
      <strong>Authorization</strong> usando el esquema Bearer.
    </p>
    <h3>Ejemplo de solicitud autenticada:</h3>
    <pre style={codeBlockStyle}>
      {`curl "https://api.menuit.com/v1/restaurants" \\
  -H "Authorization: Bearer TU_CLAVE_DE_API"`}
    </pre>
  </div>
);

const Endpoints = () => (
  <div>
    <h2>Endpoints Principales</h2>
    <h3>Obtener todos los Restaurantes</h3>
    <p>
      <code>GET /restaurants</code>
    </p>
    <p>Retorna una lista de todos los restaurantes asociados a tu cuenta.</p>

    <h3>Crear un Restaurante</h3>
    <p>
      <code>POST /restaurants</code>
    </p>
    <p>
      Crea un nuevo restaurante. El cuerpo de la solicitud debe contener los
      detalles del restaurante en formato JSON.
    </p>
    <h4>Ejemplo de cuerpo (body):</h4>
    <pre style={codeBlockStyle}>
      {`{
  "name": "La Trattoria del Nonno",
  "address": "Av. Siempre Viva 123",
  "cuisine": "Italiana"
}`}
    </pre>
  </div>
);

const sections: { [key: string]: React.ComponentType } = {
  introduction: Introduction,
  authentication: Authentication,
  endpoints: Endpoints,
};

const codeBlockStyle: React.CSSProperties = {
  backgroundColor: "#1f2937", // gray-800
  color: "#e5e7eb", // gray-200
  padding: "1rem",
  borderRadius: "0.5rem",
  overflowX: "auto",
  fontFamily: "monospace",
};

// --- Componente Principal de la Página ---

const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const ActiveComponent = sections[activeSection];

  const sidebarLinkStyle = (section: string): React.CSSProperties => ({
    display: "block",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    marginBottom: "0.5rem",
    fontWeight: activeSection === section ? "bold" : "normal",
    backgroundColor: activeSection === section ? "#f97316" : "transparent",
    color: activeSection === section ? "white" : "#374151",
  });

  return (
    <div
      style={{
        padding: "6rem 1rem 4rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "4rem",
        }}
      >
        {/* Barra Lateral de Navegación */}
        <aside>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Documentación
          </h2>
          <nav>
            <a
              onClick={() => setActiveSection("introduction")}
              style={sidebarLinkStyle("introduction")}
            >
              Introducción
            </a>
            <a
              onClick={() => setActiveSection("authentication")}
              style={sidebarLinkStyle("authentication")}
            >
              Autenticación
            </a>
            <a
              onClick={() => setActiveSection("endpoints")}
              style={sidebarLinkStyle("endpoints")}
            >
              Endpoints
            </a>
          </nav>
        </aside>

        {/* Contenido Principal */}
        <main>
          <div style={{ lineHeight: "1.7", color: "#374151" }}>
            {ActiveComponent && <ActiveComponent />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;
