import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";
import "../styles/AuthenticatedHeader.css";
const AuthenticatedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="auth-header">
      <div className="auth-header-container">
        <Link to="/adminmenu" className="logo">
          <div className="logo-icon">M</div>
          <span className="logo-text">MenuIT</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación de Escritorio */}
        <nav className="auth-nav-desktop">
          <Link to="/adminmenu">Mi Menú</Link>
          <Link to="/profile">Perfil</Link>
          {/* Añade más enlaces según necesites */}
        </nav>

        {/* Acciones de Escritorio */}
        <div className="auth-actions-desktop">
          <button className="btn-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <div className={`auth-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="auth-mobile-menu-container">
          <nav className="auth-nav-mobile">
            <Link to="/adminmenu" onClick={() => setIsMenuOpen(false)}>
              Mi Menú
            </Link>
            <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
              Perfil
            </Link>
          </nav>
          <div className="auth-actions-mobile">
            <button className="btn-logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthenticatedHeader;
