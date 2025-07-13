import React from "react";

// Define los tipos de estado para mayor claridad y mantenibilidad
type Status =
  | "Operacional"
  | "Interrupción Parcial"
  | "Interrupción Total"
  | "Mantenimiento";

interface Service {
  name: string;
  status: Status;
}

// Datos estáticos de los servicios. Puedes actualizarlos aquí cuando sea necesario.
const services: Service[] = [
  { name: "API Principal", status: "Operacional" },
  { name: "Sitio Web y Panel de Control", status: "Operacional" },
  { name: "Sistema de Autenticación", status: "Operacional" },
  { name: "Procesamiento de Pagos", status: "Operacional" },
  { name: "Servicio de Notificaciones", status: "Operacional" },
  { name: "Base de Datos de Clientes", status: "Operacional" },
];

const getStatusIndicator = (status: Status) => {
  const styles: React.CSSProperties = {
    display: "inline-block",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    marginRight: "12px",
  };

  switch (status) {
    case "Operacional":
      return (
        <span
          style={{ ...styles, backgroundColor: "#22c55e" /* green-500 */ }}
        />
      );
    case "Interrupción Parcial":
      return (
        <span
          style={{ ...styles, backgroundColor: "#f59e0b" /* amber-500 */ }}
        />
      );
    case "Mantenimiento":
      return (
        <span
          style={{ ...styles, backgroundColor: "#3b82f6" /* blue-500 */ }}
        />
      );
    case "Interrupción Total":
      return (
        <span style={{ ...styles, backgroundColor: "#ef4444" /* red-500 */ }} />
      );
    default:
      return null;
  }
};

const ServiceStatusPage: React.FC = () => {
  const allSystemsOperational = services.every(
    (s) => s.status === "Operacional"
  );

  return (
    <div
      className="container"
      style={{ padding: "8rem 1rem 4rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Estado del Servicio
      </h1>
      <div
        style={{
          padding: "1rem",
          borderRadius: "0.75rem",
          marginBottom: "2rem",
          backgroundColor: allSystemsOperational ? "#dcfce7" : "#fef9c3", // green-100 or yellow-100
          color: allSystemsOperational ? "#166534" : "#854d0e", // green-800 or yellow-800
        }}
      >
        <p style={{ fontWeight: "bold" }}>
          {allSystemsOperational
            ? "✅ Todos los sistemas están operacionales."
            : "⚠️ Algunos sistemas están experimentando problemas."}
        </p>
      </div>

      <div style={{ border: "1px solid #e5e7eb", borderRadius: "0.75rem" }}>
        {services.map((service, index) => (
          <div
            key={service.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.5rem",
              borderBottom:
                index === services.length - 1 ? "none" : "1px solid #e5e7eb",
            }}
          >
            <span style={{ fontSize: "1.125rem", color: "#1f2937" }}>
              {service.name}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                color: "#4b5563",
              }}
            >
              {getStatusIndicator(service.status)}
              {service.status}
            </span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: "2rem", color: "#6b7280", textAlign: "center" }}>
        Última actualización: 12 de julio de 2025, 5:57 PM
      </p>
    </div>
  );
};

export default ServiceStatusPage;
