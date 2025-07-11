import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

interface RestaurantProfile {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<RestaurantProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.msg || "Error al obtener el perfil");
        }
        setProfile(data);
      } catch (err: any) {
        setError(err.message);
        if (err.message.includes("Token has expired")) {
          logout();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isAuthenticated, token, navigate, logout]);

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        boxShadow: "var(--shadow-dashboard-card)",
        borderRadius: "var(--border-radius-xl)",
      }}
    >
      <h2 style={{ color: "var(--primary-800)" }}>Perfil del Restaurante</h2>
      {profile && (
        <div>
          <p>
            <strong>Nombre:</strong> {profile.name}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Dirección:</strong> {profile.address}
          </p>
          <p>
            <strong>Teléfono:</strong> {profile.phone}
          </p>
        </div>
      )}
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        style={{
          marginTop: "2rem",
          backgroundColor: "var(--btn-danger-bg)",
          color: "white",
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
