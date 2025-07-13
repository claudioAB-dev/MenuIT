import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import "../styles/Header.css";

interface ScrollToSectionProps {
  sectionId: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: ScrollToSectionProps["sectionId"]) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Cierra el menú móvil al hacer clic
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <a href="/">M</a>
          </div>
          <a href="/" className="logo-text">
            MenuIT
          </a>
        </div>

        {/* Botón del Menú Móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación de Escritorio */}
        <nav className="nav-desktop">
          <button onClick={() => scrollToSection("features")}>
            Características
          </button>
          <button onClick={() => scrollToSection("pricing")}>Precios</button>
          <button onClick={() => scrollToSection("testimonials")}>
            Testimonios
          </button>
        </nav>

        {/* Acciones de Escritorio */}
        <div className="actions-desktop">
          <button
            className="btn btn-secondary"
            onClick={() => (window.location.href = "/login")}
          >
            Iniciar Sesión
          </button>
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = "/register")}
          >
            Registrarse
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-container">
            <nav className="nav-mobile">
              <button
                onClick={() => scrollToSection("features")}
                style={{ "--stagger-index": 1 } as React.CSSProperties}
              >
                Características
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                style={{ "--stagger-index": 2 } as React.CSSProperties}
              >
                Precios
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                style={{ "--stagger-index": 3 } as React.CSSProperties}
              >
                Testimonios
              </button>
            </nav>
            <div className="actions-mobile">
              <button
                className="btn btn-secondary"
                style={{ "--stagger-index": 4 } as React.CSSProperties}
              >
                Iniciar Sesión
              </button>
              <button
                className="btn btn-primary"
                style={{ "--stagger-index": 5 } as React.CSSProperties}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
