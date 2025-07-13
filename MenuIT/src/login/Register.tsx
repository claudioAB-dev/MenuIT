import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/Register.css";

interface FormData {
  name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Limpiar error al cambiar valores
  };

  const validateStep = (step: number): boolean => {
    setError(null); // Limpiar error anterior

    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          setError("El nombre del restaurante es requerido");
          return false;
        }
        if (formData.name.length < 3) {
          setError("El nombre debe tener al menos 3 caracteres");
          return false;
        }
        return true;
      case 2:
        if (!formData.address.trim()) {
          setError("La dirección es requerida");
          return false;
        }
        if (!formData.phone.trim()) {
          setError("El teléfono es requerido");
          return false;
        }
        if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
          setError("El teléfono debe tener 10 dígitos");
          return false;
        }
        return true;
      case 3:
        if (!formData.email.trim()) {
          setError("El email es requerido");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError("El email no es válido");
          return false;
        }
        if (!formData.password) {
          setError("La contraseña es requerida");
          return false;
        }
        if (formData.password.length < 6) {
          setError("La contraseña debe tener al menos 6 caracteres");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError("Las contraseñas no coinciden");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setError(null);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setError(null);
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setLoading(true);
    setError(null);

    try {
      const { confirmPassword, ...submitData } = formData;
      const response = await fetch("http://127.0.0.1:5001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Error al registrar la cuenta.");
      }

      alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Información del Restaurante";
      case 2:
        return "Datos de Contacto";
      case 3:
        return "Credenciales de Acceso";
      default:
        return "";
    }
  };

  const getStepSubtitle = () => {
    switch (currentStep) {
      case 1:
        return "Cuéntanos sobre tu restaurante";
      case 2:
        return "¿Dónde te ubicamos?";
      case 3:
        return "Crea tu cuenta de acceso";
      default:
        return "";
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre del Restaurante
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Ej: Restaurante La Bella Vista"
              autoFocus
            />
          </div>
        );
      case 2:
        return (
          <>
            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
                placeholder="Ej: Calle 5 de Mayo #123, Centro"
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Ej: 222 123 4567"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="tu@email.com"
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Mínimo 6 caracteres"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="Repite tu contraseña"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-card">
        {/* Header con logo */}
        <div className="register-header">
          <Link className="register-logo" to="/">
            M
          </Link>
          <h2 className="register-title">{getStepTitle()}</h2>
          <p className="register-subtitle">{getStepSubtitle()}</p>
        </div>

        {/* Indicador de progreso */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">Paso {currentStep} de 3</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {renderStep()}

          {/* Mensaje de error */}
          {error && (
            <div className="error-message-container">
              <p className="error-message-text">{error}</p>
            </div>
          )}

          {/* Botones de navegación */}
          <div className="button-group">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="secondary-button"
                disabled={loading}
              >
                Anterior
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="primary-button"
                disabled={loading}
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                className="primary-button"
                disabled={loading}
              >
                {loading ? "Registrando..." : "Crear Cuenta"}
              </button>
            )}
          </div>
        </form>

        <div className="login-link-container">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="login-link">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
