//import React from "react";
import { Smartphone, Zap, Users, Star, Check } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/HeroStyles.css";
import "./styles/Features.css";
import "./styles/PricingStyles.css";
import "./styles/TestimonialsStyles.css";
import "./styles/CtaStyles.css";

const MenuITLanding = () => {
  // Los estados y efectos del header ya no están aquí

  const testimonialsData = [
    {
      quote:
        "MenuIT transformó completamente la experiencia de nuestros clientes. Ya no se quejan de menús borrosos y pueden ver todas nuestras especialidades en alta calidad.",
      name: "Carlos Mendoza",
      title: "Dueño - Tacos El Patrón",
      initials: "CM",
      theme: "customer-one",
    },
    {
      quote:
        "La facilidad para actualizar precios y platillos es increíble. Antes tardábamos días en reimprimir menús, ahora son segundos.",
      name: "Ana Rodríguez",
      title: "Gerente - Café Luna",
      initials: "AR",
      theme: "customer-two",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 font-sans">
      {/* Header */}
      <Header />

      <section className="hero-section">
        <div className="container hero-section__container">
          <div className="hero-section__content">
            <h1 className="hero-section__title">
              Transforma tu menú en una{" "}
              <span className="hero-section__title-gradient">
                experiencia digital
              </span>
            </h1>
            <p className="hero-section__subtitle">
              Adiós a PDFs borrosos y fotos mal tomadas. Crea menús web
              interactivos que enamoran a tus clientes.
            </p>
            <div className="hero-section__actions">
              <button
                className="hero-section__button hero-section__button--primary"
                onClick={() => (window.location.href = "/register")}
              >
                Prueba Gratis 14 Días
              </button>
              <button className="hero-section__button hero-section__button--secondary">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <header className="features-header">
            <h2 className="features-title">¿Por qué elegir MenuIT?</h2>
            <p className="features-subtitle">
              Digitaliza la experiencia en tu restaurante con tecnología que tus
              clientes amarán.
            </p>
          </header>

          <div className="features-grid">
            {/* Feature Card 1: Móvil */}
            <div className="feature-card mobile">
              <div className="feature-card__icon-wrapper">
                <Smartphone className="feature-card__icon" size={32} />
              </div>
              <h3 className="feature-card__title">100% Móvil</h3>
              <p className="feature-card__text">
                Tus clientes acceden al menú al instante desde cualquier
                dispositivo con un simple código QR. Sin apps, sin
                complicaciones.
              </p>
            </div>

            {/* Feature Card 2: Rápido */}
            <div className="feature-card fast">
              <div className="feature-card__icon-wrapper">
                <Zap className="feature-card__icon" size={32} />
              </div>
              <h3 className="feature-card__title">Actualización Instantánea</h3>
              <p className="feature-card__text">
                Cambia precios, añade nuevos platillos o activa promociones en
                segundos. Tu menú, siempre al día.
              </p>
            </div>

            {/* Feature Card 3: Experiencia */}
            <div className="feature-card experience">
              <div className="feature-card__icon-wrapper">
                <Users className="feature-card__icon" size={32} />
              </div>
              <h3 className="feature-card__title">Mejor Experiencia</h3>
              <p className="feature-card__text">
                Ofrece menús interactivos con imágenes en alta definición,
                descripciones detalladas y una navegación intuitiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <header className="pricing-section__header">
            <h2 className="pricing-section__title">Precios transparentes</h2>
            <p className="pricing-section__subtitle">
              Elige el plan perfecto para tu restaurante
            </p>
          </header>

          <div className="pricing-section__grid">
            {/* Plan Básico */}
            <div className="pricing-card">
              <header className="pricing-card__header">
                <h3 className="pricing-card__plan-name">Básico</h3>
                <div className="pricing-card__price">
                  $120
                  <span className="pricing-card__period">/ mes</span>
                </div>
              </header>
              <ul className="pricing-card__features-list">
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Menú digital ilimitado</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Código QR personalizado</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Actualizaciones en tiempo real</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Soporte por email</span>
                </li>
              </ul>
              <button
                className="pricing-card__cta-button"
                onClick={() => (window.location.href = "/register")}
              >
                Comenzar Ahora
              </button>
            </div>

            {/* Plan Pro (Recomendado) */}
            <div className="pricing-card pricing-card--recommended">
              <div className="pricing-card__badge">Más Popular</div>
              <header className="pricing-card__header">
                <h3 className="pricing-card__plan-name">Pro</h3>
                <div className="pricing-card__price">
                  $200
                  <span className="pricing-card__period">/ mes</span>
                </div>
              </header>
              <ul className="pricing-card__features-list">
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Todo lo del plan Básico</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Múltiples ubicaciones</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Análisis y estadísticas</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Dominio personalizado</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Soporte prioritario</span>
                </li>
              </ul>
              <button
                className="pricing-card__cta-button"
                onClick={() => (window.location.href = "/register")}
              >
                Comenzar Ahora
              </button>
            </div>

            {/* Plan Enterprise */}
            <div className="pricing-card pricing-card--enterprise">
              <header className="pricing-card__header">
                <h3 className="pricing-card__plan-name">Enterprise</h3>
                <div className="pricing-card__price">
                  $1,000
                  <span className="pricing-card__period">/ mes</span>
                </div>
              </header>
              <ul className="pricing-card__features-list">
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Todo lo del plan Pro</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>API personalizada</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Integración con POS</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Soporte 24/7</span>
                </li>
                <li className="pricing-card__feature-item">
                  <Check className="pricing-card__icon" size={20} />
                  <span>Gestor de cuentas dedicado</span>
                </li>
              </ul>
              <button className="pricing-card__cta-button">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <header className="testimonials-section__header">
            <h2 className="testimonials-section__title">
              Lo que dicen nuestros clientes
            </h2>
            <p className="testimonials-section__subtitle">
              Más de 500 restaurantes ya confían en MenuIT
            </p>
          </header>

          <div className="testimonials-section__grid">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${testimonial.theme}`}
              >
                <div className="testimonial-card__rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="testimonial-card__star"
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="testimonial-card__quote">"{testimonial.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {testimonial.initials}
                  </div>
                  <div className="testimonial-card__author-info">
                    <div className="testimonial-card__author-name">
                      {testimonial.name}
                    </div>
                    <div className="testimonial-card__author-title">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-section__container">
          <h2 className="cta-section__title">
            ¿Listo para revolucionar tu menú?
          </h2>
          <p className="cta-section__subtitle">
            Únete a cientos de restaurantes que ya han dado el salto digital.
          </p>
          <div className="cta-section__actions">
            <button className="cta-section__button cta-section__button--primary">
              Comenzar Prueba Gratis
            </button>
            <button className="cta-section__button cta-section__button--secondary">
              Hablar con Ventas
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MenuITLanding;
