import React from "react";
import { QrCode, BookOpen, BarChart2, ShoppingCart } from "lucide-react";

// --- Datos de las Características ---
const features = [
  {
    icon: <BookOpen size={40} style={{ color: "#f97316" }} />,
    title: "Gestión de Menú Digital e Intuitiva",
    description:
      "Crea, actualiza y organiza tu menú en minutos. Añade platillos, descripciones, precios y fotografías con una interfaz de arrastrar y soltar. Olvídate de los menús de papel y los costos de reimpresión.",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    align: "left",
  },
  {
    icon: <QrCode size={40} style={{ color: "#f97316" }} />,
    title: "Generación de Códigos QR Dinámicos",
    description:
      "Genera códigos QR únicos para cada mesa o para tu restaurante en general. Tus clientes solo necesitan escanear con su teléfono para acceder al instante a tu menú actualizado, mejorando la higiene y la eficiencia.",
    imageUrl:
      "https://images.unsplash.com/photo-1593424859858-2a2b918c3a97?q=80&w=1974&auto=format&fit=crop",
    align: "right",
  },
  {
    icon: <ShoppingCart size={40} style={{ color: "#f97316" }} />,
    title: "Sistema de Pedidos Directo a Cocina (Próximamente)",
    description:
      "Permite que tus clientes ordenen directamente desde su mesa. Los pedidos llegan de forma instantánea a una pantalla en cocina, reduciendo errores, agilizando los tiempos y liberando a tu personal para que se enfoque en el servicio.",
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop",
    align: "left",
  },
  {
    icon: <BarChart2 size={40} style={{ color: "#f97316" }} />,
    title: "Análisis y Estadísticas de Venta",
    description:
      "Obtén información valiosa sobre tu negocio. Descubre cuáles son tus platillos más populares, los horarios de mayor afluencia y las tendencias de consumo para tomar decisiones inteligentes y optimizar tu rentabilidad.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    align: "right",
  },
];

// --- Componente de la Página ---
const ProductFeaturesPage: React.FC = () => {
  return (
    <div>
      {/* --- Sección Hero --- */}
      <div
        style={{
          textAlign: "center",
          padding: "8rem 1rem 6rem",
          backgroundColor: "#f9fafb",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Herramientas Diseñadas para tu Restaurante
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "1rem auto 0",
            color: "#4b5563",
            lineHeight: "1.5",
          }}
        >
          Desde el menú hasta el análisis de ventas, MenuIT te da el control
          total de tu operación digital.
        </p>
      </div>

      {/* --- Sección de Características --- */}
      <div
        className="container"
        style={{ maxWidth: "1024px", margin: "0 auto", padding: "4rem 1rem" }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "3rem",
              alignItems: "center",
              marginBottom: "4rem",
              // @ts-ignore - for demonstration
              "@media (minWidth: 768px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <div
              style={{
                // @ts-ignore - for demonstration
                order: feature.align === "right" ? 2 : 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                {feature.icon}
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "bold",
                    marginLeft: "1rem",
                  }}
                >
                  {feature.title}
                </h2>
              </div>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                  color: "#374151",
                }}
              >
                {feature.description}
              </p>
            </div>
            <div
              style={{
                // @ts-ignore - for demonstration
                order: feature.align === "right" ? 1 : 2,
                textAlign: "center",
              }}
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "0.75rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* --- Sección de Llamada a la Acción (CTA) --- */}
      <div style={{ backgroundColor: "#fff7ed", padding: "4rem 1rem" }}>
        <div
          className="container"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            ¿Listo para transformar tu restaurante?
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.125rem",
              color: "#6b7280",
            }}
          >
            Únete a cientos de restaurantes que ya están optimizando su gestión
            con MenuIT.
          </p>
          <button
            style={{
              marginTop: "2rem",
              padding: "1rem 2rem",
              backgroundColor: "#f97316",
              color: "white",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1.125rem",
            }}
            onClick={() => (window.location.href = "/register")}
          >
            Comienza Gratis Hoy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesPage;
