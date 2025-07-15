import React from "react";
import { Link } from "react-router-dom";
import "./styles/SessionExpiredModal.css"; // Estilos para el modal

const SessionExpiredModal: React.FC = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sesión Caducada</h2>
        <p>Tu sesión ha finalizado por inactividad.</p>
        <Link to="/login" className="modal-button">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default SessionExpiredModal;
