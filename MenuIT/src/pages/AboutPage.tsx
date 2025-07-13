import React from "react";
import { Rocket, Users, Heart, Lightbulb } from "lucide-react";
{
  /*const teamMembers = [
  {
    name: "Claudio Ariza",
    role: "CEO y Fundador",
    imageUrl: "https://i.pravatar.cc/150?u=anagarcia",
  },
  {
    name: "Juan Pérez",
    role: "CTO y Co-Fundador",
    imageUrl: "https://i.pravatar.cc/150?u=juanperez",
  },
  {
    name: "Sofía López",
    role: "Diseñadora de Producto",
    imageUrl: "https://i.pravatar.cc/150?u=sofialopez",
  },
  {
    name: "Carlos Martínez",
    role: "Jefe de Operaciones",
    imageUrl: "https://i.pravatar.cc/150?u=carlosmartinez",
  },
]; */
}

const values = [
  {
    icon: <Rocket size={32} className="text-orange-500" />,
    title: "Innovación Constante",
    description:
      "Buscamos sin descanso nuevas formas de mejorar y simplificar la gestión de restaurantes.",
  },
  {
    icon: <Users size={32} className="text-orange-500" />,
    title: "Foco en el Cliente",
    description:
      "Nuestros clientes son el centro de todo lo que hacemos. Su éxito es nuestro éxito.",
  },
  {
    icon: <Heart size={32} className="text-orange-500" />,
    title: "Pasión por la Gastronomía",
    description:
      "Amamos la comida y la cultura de los restaurantes. Esa pasión impulsa nuestro trabajo diario.",
  },
  {
    icon: <Lightbulb size={32} className="text-orange-500" />,
    title: "Simplicidad",
    description:
      "Creemos que el software potente no tiene por qué ser complicado.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div style={{ color: "#1f2937" }}>
      {/* --- Sección Hero --- */}
      <div
        style={{
          textAlign: "center",
          padding: "8rem 1rem 6rem",
          backgroundColor: "#fff7ed",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Nuestra Misión es Simple:
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "700px",
            margin: "1rem auto 0",
            color: "#4b5563",
            lineHeight: "1.5",
          }}
        >
          Empoderar a cada restaurante con la tecnología para prosperar en la
          era digital.
        </p>
      </div>

      {/* --- Sección Nuestra Historia --- */}
      <div
        className="container"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1rem" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Nuestra Historia
        </h2>
        <p
          style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "#374151" }}
        >
          MenuIT nació de una idea simple en una pequeña cafetería de Puebla.
          Como desarrolladores de software y amantes de la buena comida, nos
          dimos cuenta de que muchos dueños de restaurantes luchaban con
          herramientas digitales complicadas y costosas.
          <br />
          <br />
          Decidimos cambiar eso. En 2024, nos propusimos crear una plataforma
          intuitiva, asequible y potente que pusiera el control de nuevo en
          manos de los restauranteros. Después de meses de desarrollo y
          colaboración con chefs y gerentes locales, MenuIT se hizo realidad.
        </p>
      </div>

      {/* <div style={{ backgroundColor: "#f9fafb", padding: "4rem 1rem" }}>
        <div
          className="container"
          style={{ maxWidth: "1024px", margin: "0 auto" }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Conoce a Nuestro Equipo
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.name} style={{ textAlign: "center" }}>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    objectFit: "cover",
                  }}
                />
                <h3
                  style={{
                    marginTop: "1rem",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  {member.name}
                </h3>
                <p style={{ color: "#f97316" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* --- Sección Nuestros Valores --- */}
      <div
        className="container"
        style={{ maxWidth: "1024px", margin: "0 auto", padding: "4rem 1rem" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Nuestros Valores
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {values.map((value) => (
            <div key={value.title}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span style={{ color: "#f97316", marginRight: "0.75rem" }}>
                  {value.icon}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  {value.title}
                </h3>
              </div>
              <p style={{ color: "#4b5563" }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
