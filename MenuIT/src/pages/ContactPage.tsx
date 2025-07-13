import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div style={{ padding: "8rem 1rem 4rem", backgroundColor: "#f9fafb" }}>
      <div
        className="container"
        style={{ maxWidth: "1024px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Ponte en Contacto
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.125rem",
              color: "#6b7280",
            }}
          >
            Nos encantaría saber de ti. Completa el formulario o utiliza
            nuestros datos de contacto.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "4rem",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "0.75rem",
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            }}
          >
            {" "}
            <div style={{ paddingTop: "1rem" }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
                Información de Contacto
              </h2>
              <p
                style={{
                  marginTop: "0.5rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                }}
              >
                Aquí nos puedes encontrar.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Mail
                  size={20}
                  style={{ color: "#f97316", marginRight: "1rem" }}
                />
                <span style={{ color: "#374151" }}>contacto@menuit.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Phone
                  size={20}
                  style={{ color: "#f97316", marginRight: "1rem" }}
                />
                <span style={{ color: "#374151" }}>+52 222 123 4567</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  marginBottom: "2rem",
                }}
              >
                <MapPin
                  size={20}
                  style={{
                    color: "#f97316",
                    marginRight: "1rem",
                    flexShrink: 0,
                  }}
                />
                <span style={{ color: "#374151" }}>Puebla, Puebla, México</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
