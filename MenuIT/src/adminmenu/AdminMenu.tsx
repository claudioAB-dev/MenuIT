import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { getCategories, getDishes } from "../services/adminMenuApi";
import "./styles/AdminMenu.css";

const AdminMenu: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 👈 2. Usar el hook para obtener el estado de autenticación y el token
  const { token, isAuthenticated } = useAuth();

  useEffect(() => {
    // 👈 3. Verificar si el usuario está autenticado
    if (!isAuthenticated || !token) {
      setError("No autenticado. Por favor, inicia sesión.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        // Llamadas a la API usando el token del contexto
        const [categoriesData, dishesData] = await Promise.all([
          getCategories(token),
          getDishes(token),
        ]);
        setCategories(categoriesData);
        setDishes(dishesData);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Ocurrió un error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, isAuthenticated]); // 👈 4. Añadir isAuthenticated como dependencia

  if (loading) {
    return <div>Cargando panel de administración... ⏳</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="admin-container">
      <h1>Panel de Administración del Menú 🍽️</h1>

      <div className="admin-section">
        <h2>Categorías</h2>
        {/* Aquí iría el componente para gestionar categorías */}
        <ul>
          {categories.map((cat: any) => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      </div>

      <div className="admin-section">
        <h2>Platillos</h2>
        {/* Aquí iría el componente para gestionar platillos */}
        <ul>
          {dishes.map((dish: any) => (
            <li key={dish.id}>
              {dish.name} - ${dish.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
