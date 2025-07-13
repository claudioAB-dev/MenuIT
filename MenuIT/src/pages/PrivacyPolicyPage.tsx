// src/pages/PrivacyPolicyPage.tsx
import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  const companyName = "MenuIT"; // Puedes cambiar esto por una variable de entorno
  const lastUpdated = "12 de julio de 2025";
  const companyEmail = "contacto@menuit.com";
  const companyAddress = "Puebla, Puebla, México";

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "1rem",
    borderBottom: "2px solid #e5e7eb",
    paddingBottom: "0.5rem",
  };

  const textStyle: React.CSSProperties = {
    lineHeight: "1.6",
    color: "#374151",
  };

  const listStyle: React.CSSProperties = {
    listStyleType: "disc",
    marginLeft: "20px",
  };

  return (
    <div
      className="container"
      style={{ padding: "8rem 1rem 4rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        Política de Privacidad
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Última actualización: {lastUpdated}
      </p>

      <p style={textStyle}>
        Bienvenido a {companyName}. Tu privacidad es de suma importancia para
        nosotros. Esta Política de Privacidad establece los términos en que{" "}
        {companyName} usa y protege la información que es proporcionada por sus
        usuarios al momento de utilizar su sitio web y servicios.
      </p>

      <h2 style={sectionTitleStyle}>1. Información que Recopilamos</h2>
      <p style={textStyle}>
        Recopilamos diferentes tipos de información para proporcionar y mejorar
        nuestro servicio para ti.
      </p>
      <ul style={{ ...textStyle, ...listStyle }}>
        <li>
          <strong>Datos Personales:</strong> Al utilizar nuestro servicio,
          podemos pedirte que nos proporciones cierta información de
          identificación personal que puede ser utilizada para contactarte o
          identificarte ("Datos Personales"). Esto puede incluir, pero no se
          limita a: nombre y apellidos, dirección de correo electrónico, número
          de teléfono, y datos de uso.
        </li>
        <li>
          <strong>Datos de Uso:</strong> Recopilamos información sobre cómo se
          accede y utiliza el Servicio ("Datos de Uso"). Estos Datos de Uso
          pueden incluir información como la dirección de Protocolo de Internet
          de tu computadora (por ejemplo, dirección IP), tipo de navegador,
          versión del navegador, las páginas de nuestro Servicio que visitas, la
          hora y fecha de tu visita, el tiempo dedicado a esas páginas y otros
          datos de diagnóstico.
        </li>
        <li>
          <strong>Cookies:</strong> Utilizamos cookies y tecnologías de
          seguimiento similares para rastrear la actividad en nuestro Servicio y
          mantener cierta información.
        </li>
      </ul>

      <h2 style={sectionTitleStyle}>2. Uso de la Información Recogida</h2>
      <p style={textStyle}>
        {companyName} utiliza los datos recopilados para diversas finalidades:
      </p>
      <ul style={{ ...textStyle, ...listStyle }}>
        <li>Para proporcionar y mantener nuestro Servicio.</li>
        <li>Para notificarte sobre cambios en nuestro Servicio.</li>
        <li>
          Para permitirte participar en funciones interactivas de nuestro
          Servicio cuando elijas hacerlo.
        </li>
        <li>Para proporcionar atención al cliente.</li>
        <li>
          Para recopilar análisis o información valiosa que nos permita mejorar
          nuestro Servicio.
        </li>
        <li>Para monitorear el uso de nuestro Servicio.</li>
      </ul>

      <h2 style={sectionTitleStyle}>3. Con Quién Compartimos tu Información</h2>
      <p style={textStyle}>
        No venderemos, cederemos ni distribuiremos la información personal que
        es recopilada sin tu consentimiento, salvo que sea requerido por un juez
        con una orden judicial. Podemos emplear a terceras empresas y personas
        para facilitar nuestro Servicio ("Proveedores de Servicios"), para
        proporcionar el Servicio en nuestro nombre o para ayudarnos a analizar
        cómo se utiliza nuestro Servicio.
      </p>

      <h2 style={sectionTitleStyle}>4. Seguridad de los Datos</h2>
      <p style={textStyle}>
        {companyName} está altamente comprometido para cumplir con el compromiso
        de mantener tu información segura. Usamos los sistemas más avanzados y
        los actualizamos constantemente para asegurarnos que no exista ningún
        acceso no autorizado. Sin embargo, ningún método de transmisión por
        Internet o de almacenamiento electrónico es 100% seguro.
      </p>

      <h2 style={sectionTitleStyle}>5. Tus Derechos de Protección de Datos</h2>
      <p style={textStyle}>
        Tienes derecho a acceder, rectificar o suprimir tus datos personales,
        así como otros derechos, como se explica a continuación:
      </p>
      <ul style={{ ...textStyle, ...listStyle }}>
        <li>
          <strong>Derecho de acceso:</strong> Obtener confirmación de si estamos
          tratando tus datos personales.
        </li>
        <li>
          <strong>Derecho de rectificación:</strong> Corregir datos inexactos.
        </li>
        <li>
          <strong>Derecho de supresión:</strong> Solicitar la eliminación de tus
          datos cuando ya no sean necesarios.
        </li>
      </ul>
      <p style={textStyle}>
        Para ejercer estos derechos, puedes contactarnos a través de{" "}
        {companyEmail}.
      </p>

      <h2 style={sectionTitleStyle}>6. Cambios en la Política de Privacidad</h2>
      <p style={textStyle}>
        Nos reservamos el derecho de cambiar los términos de la presente
        Política de Privacidad en cualquier momento. Te recomendamos y
        enfatizamos revisar continuamente esta página para asegurarte que estás
        de acuerdo con dichos cambios.
      </p>

      <h2 style={sectionTitleStyle}>7. Contacto</h2>
      <p style={textStyle}>
        Si tienes alguna pregunta sobre esta Política de Privacidad, por favor
        contáctanos:
      </p>
      <ul style={{ ...textStyle, ...listStyle }}>
        <li>Por correo electrónico: {companyEmail}</li>
        <li>Dirección: {companyAddress}</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;
