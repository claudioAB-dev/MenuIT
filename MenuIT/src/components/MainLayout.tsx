import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../LandingPage/components/Header";
import Footer from "../LandingPage/components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "calc(100vh - 180px)" }}>
        {" "}
        <Outlet /> {/* Aquí se renderizará el contenido de la ruta hija */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
