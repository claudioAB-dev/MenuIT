import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Error al registrar la cuenta.");
      }

      // Si el registro es exitoso, redirigir al login
      alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "2rem",
        boxShadow: "var(--shadow-lg)",
        borderRadius: "var(--border-radius-lg)",
        backgroundColor: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "var(--primary-700)",
          marginBottom: "1.5rem",
        }}
      >
        Crear Cuenta
      </h2>
      <form onSubmit={handleSubmit}>
        {/* --- Campos del formulario --- */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              color: "var(--form-label-color)",
              marginBottom: "0.5rem",
            }}
          >
            Nombre del Restaurante
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--form-input-border)",
              borderRadius: "var(--border-radius-md)",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="address"
            style={{
              display: "block",
              color: "var(--form-label-color)",
              marginBottom: "0.5rem",
            }}
          >
            Dirección
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--form-input-border)",
              borderRadius: "var(--border-radius-md)",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="phone"
            style={{
              display: "block",
              color: "var(--form-label-color)",
              marginBottom: "0.5rem",
            }}
          >
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--form-input-border)",
              borderRadius: "var(--border-radius-md)",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              color: "var(--form-label-color)",
              marginBottom: "0.5rem",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--form-input-border)",
              borderRadius: "var(--border-radius-md)",
            }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="password"
            style={{
              display: "block",
              color: "var(--form-label-color)",
              marginBottom: "0.5rem",
            }}
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid var(--form-input-border)",
              borderRadius: "var(--border-radius-md)",
            }}
          />
        </div>

        {error && (
          <p
            style={{
              color: "var(--error-600)",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "none",
            borderRadius: "var(--border-radius-md)",
            backgroundColor: "var(--btn-primary-bg)",
            color: "var(--btn-primary-text)",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {loading ? "Registrando..." : "Crear Cuenta"}
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
        ¿Ya tienes una cuenta?{" "}
        <Link
          to="/login"
          style={{ color: "var(--primary-600)", textDecoration: "none" }}
        >
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
};

export default Register;
