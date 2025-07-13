import React, { useState } from "react";

// --- Datos estáticos para el Centro de Ayuda ---
const faqCategories = [
  {
    category: "Primeros Pasos",
    questions: [
      {
        question: "¿Cómo me registro en MenuIT?",
        answer:
          'Puedes registrarte haciendo clic en el botón "Registrarse" en la esquina superior derecha. Solo necesitas proporcionar tu nombre, correo electrónico y crear una contraseña segura.',
      },
      {
        question: "¿Cómo configuro mi primer restaurante?",
        answer:
          "Una vez que inicies sesión, serás guiado por un asistente de configuración. Deberás ingresar el nombre de tu restaurante, la dirección y subir tu menú inicial. ¡Es muy sencillo!",
      },
    ],
  },
  {
    category: "Cuenta y Facturación",
    questions: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer:
          "Aceptamos todas las principales tarjetas de crédito y débito, incluyendo Visa, MasterCard y American Express.",
      },
      {
        question: "¿Cómo puedo cancelar mi suscripción?",
        answer:
          'Puedes cancelar tu suscripción en cualquier momento desde el panel de "Configuración de la cuenta", en la sección de "Facturación". No hay preguntas ni cargos adicionales.',
      },
    ],
  },
  {
    category: "Solución de Problemas",
    questions: [
      {
        question: "La página no carga, ¿qué hago?",
        answer:
          "Primero, intenta refrescar la página. Si el problema persiste, verifica tu conexión a internet y consulta nuestra página de [Estado del Servicio] para asegurarte de que no haya una interrupción general.",
      },
      {
        question: "No puedo iniciar sesión.",
        answer:
          'Asegúrate de que estás utilizando el correo electrónico y la contraseña correctos. Si has olvidado tu contraseña, puedes restablecerla utilizando el enlace "¿Olvidaste tu contraseña?" en la página de inicio de sesión.',
      },
    ],
  },
];

// --- Subcomponente para el Acordeón ---
interface AccordionItemProps {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onClick,
}) => (
  <div style={{ borderBottom: "1px solid #e5e7eb" }}>
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "1.5rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <span
        style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}
      >
        {item.question}
      </span>
      <span
        style={{
          fontSize: "1.5rem",
          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
          transition: "transform 0.2s",
        }}
      >
        +
      </span>
    </button>
    {isOpen && (
      <div
        style={{
          padding: "0 1rem 1.5rem",
          color: "#4b5563",
          lineHeight: "1.6",
        }}
      >
        {item.answer}
      </div>
    )}
  </div>
);

// --- Componente Principal de la Página ---
const HelpCenterPage: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const handleToggle = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div
      className="container"
      style={{ padding: "8rem 1rem 4rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Centro de Ayuda
        </h1>
        <p
          style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#6b7280" }}
        >
          ¿Tienes preguntas? Estamos aquí para ayudarte.
        </p>
        <div style={{ marginTop: "1.5rem", position: "relative" }}>
          <input
            type="search"
            placeholder="Busca un tema, por ejemplo, 'facturación'"
            style={{
              width: "100%",
              padding: "1rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "9999px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>
      </div>

      {faqCategories.map((category) => (
        <div key={category.category} style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            {category.category}
          </h2>
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
          >
            {category.questions.map((q) => (
              <AccordionItem
                key={q.question}
                item={q}
                isOpen={openQuestion === q.question}
                onClick={() => handleToggle(q.question)}
              />
            ))}
          </div>
        </div>
      ))}

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem",
          backgroundColor: "#f9fafb",
          borderRadius: "0.75rem",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          ¿No encuentras lo que buscas?
        </h3>
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>
          Nuestro equipo de soporte está disponible para ayudarte.
        </p>
        <button
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#f97316",
            color: "white",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/contacto")}
        >
          Contactar a Soporte
        </button>
      </div>
    </div>
  );
};

export default HelpCenterPage;
