import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./styles/Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Prevenir envío si los campos están vacíos
    if (!email || !password) {
      setError("Por favor, completa ambos campos.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Error al iniciar sesión");
      }

      login(data.access_token);
      navigate("/profile");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        {/* Header con logo */}
        <div className="login-header">
          <a className="login-logo" href="/">
            M
          </a>
          <h2 className="login-title">Iniciar Sesión</h2>
          <p className="login-subtitle">Accede a tu cuenta de MenuIT</p>
        </div>

        {/* Se añade el manejador onSubmit al formulario */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="form-input"
              // Se enlaza el valor y el manejador de cambio
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading} // Se deshabilita durante la carga
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              className="form-input"
              // Se enlaza el valor y el manejador de cambio
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading} // Se deshabilita durante la carga
            />
          </div>

          {/* Renderizado condicional del mensaje de error */}
          {error && (
            <div className="error-message-container">
              <p className="error-message-text">{error}</p>
            </div>
          )}

          {/* El botón se deshabilita y cambia su texto durante la carga */}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className="register-link-container">
          <p>
            ¿No tienes una cuenta?{" "}
            <button
              className="register-link"
              onClick={() => navigate("/register")} // Funcionalidad de navegación
              disabled={loading}
            >
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
