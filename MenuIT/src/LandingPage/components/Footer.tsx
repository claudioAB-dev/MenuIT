import React from "react";
import "../styles/Footer.css"; //

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Columna del Logo y Redes Sociales */}
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-icon-wrapper">
                <span className="logo-icon-text">M</span>
              </div>
              <span className="logo-text">MenuIT</span>
            </div>
            <p className="brand-description">
              La plataforma líder para menús digitales de restaurantes.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                f
              </a>
              <a href="#" className="social-icon">
                t
              </a>
              <a href="#" className="social-icon">
                in
              </a>
            </div>
          </div>

          {/* Columna de Producto */}
          <div className="footer-links">
            <h3 className="footer-heading">Producto</h3>
            <ul>
              <li>
                <a href="#">Características</a>
              </li>
              <li>
                <a href="#">Precios</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Integraciones</a>
              </li>
            </ul>
          </div>

          {/* Columna de Empresa */}
          <div className="footer-links">
            <h3 className="footer-heading">Empresa</h3>
            <ul>
              <li>
                <a href="#">Acerca de</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Carreras</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna de Soporte */}
          <div className="footer-links">
            <h3 className="footer-heading">Soporte</h3>
            <ul>
              <li>
                <a href="#">Centro de Ayuda</a>
              </li>
              <li>
                <a href="#">Documentación</a>
              </li>
              <li>
                <a href="#">Estado del Servicio</a>
              </li>
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2025 MenuIT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
