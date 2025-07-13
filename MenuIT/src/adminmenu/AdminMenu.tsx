import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import {
  getCategories,
  getDishes,
  createCategory,
  updateCategory,
  deleteCategory,
  createDish,
  updateDish,
  deleteDish,
} from "../services/adminMenuApi";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import DishList from "./components/DishList";
import DishForm from "./components/DishForm";
import "./styles/AdminMenu.css";

interface Category {
  id: string;
  name: string;
  description?: string;
}

interface Dish {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  isActive: boolean;
}

interface FormData {
  name: string;
  description?: string;
  price?: number;
  categoryId?: string;
  isActive?: boolean;
}

const AdminMenu: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Estados para modales
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showDishForm, setShowDishForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingDish, setEditingDish] = useState<Dish | null>(null);

  const { token, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || !token) {
      setError("No autenticado. Por favor, inicia sesión.");
      setLoading(false);
      return;
    }

    fetchData();
  }, [token, isAuthenticated]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [categoriesData, dishesData] = await Promise.all([
        getCategories(token!),
        getDishes(token!),
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

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // Funciones para manejo de categorías
  const handleCreateCategory = async (formData: FormData) => {
    try {
      await createCategory(token!, {
        name: formData.name,
        description: formData.description,
      });
      await fetchData();
      setShowCategoryForm(false);
      showNotification("Categoría creada con éxito");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleUpdateCategory = async (formData: FormData) => {
    if (!editingCategory) return;

    try {
      await updateCategory(token!, editingCategory.id, {
        name: formData.name,
        description: formData.description,
      });
      await fetchData();
      setShowCategoryForm(false);
      setEditingCategory(null);
      showNotification("Categoría actualizada con éxito");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (
      !window.confirm("¿Estás seguro de que deseas eliminar esta categoría?")
    ) {
      return;
    }

    try {
      await deleteCategory(token!, categoryId);
      await fetchData();
      showNotification("Categoría eliminada con éxito");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setShowCategoryForm(true);
  };

  // Funciones para manejo de platillos
  const handleCreateDish = async (formData: FormData) => {
    try {
      await createDish(token!, {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        categoryId: formData.categoryId,
        isActive: formData.isActive || true,
      });
      await fetchData();
      setShowDishForm(false);
      showNotification("Platillo creado con éxito");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleUpdateDish = async (formData: FormData) => {
    if (!editingDish) return;

    try {
      await updateDish(token!, editingDish.id, {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        categoryId: formData.categoryId,
        isActive: formData.isActive,
      });
      await fetchData();
      setShowDishForm(false);
      setEditingDish(null);
      showNotification("Platillo actualizado con éxito");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteDish = async (dishId: string) => {
    if (
      !window.confirm("¿Estás seguro de que deseas eliminar este platillo?")
    ) {
      return;
    }

    try {
      await deleteDish(token!, dishId);
      await fetchData();
      showNotification("Platillo eliminado con éxito");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEditDish = (dish: Dish) => {
    setEditingDish(dish);
    setShowDishForm(true);
  };

  // Funciones para cerrar modales
  const handleCloseCategoryForm = () => {
    setShowCategoryForm(false);
    setEditingCategory(null);
  };

  const handleCloseDishForm = () => {
    setShowDishForm(false);
    setEditingDish(null);
  };

  if (loading) {
    return (
      <div className="loading">Cargando panel de administración... ⏳</div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">Error: {error}</div>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1>Panel de Administración del Menú 🍽️</h1>

      {notification && (
        <div className="notification success">{notification}</div>
      )}

      <div className="admin-section">
        <div className="section-header">
          <h2>Categorías</h2>
          <button
            className="btn btn-primary"
            onClick={() => setShowCategoryForm(true)}
          >
            Crear Nueva Categoría
          </button>
        </div>

        <CategoryList
          categories={categories}
          onEdit={handleEditCategory}
          onDelete={handleDeleteCategory}
        />
      </div>

      <div className="admin-section">
        <div className="section-header">
          <h2>Platillos</h2>
          <button
            className="btn btn-primary"
            onClick={() => setShowDishForm(true)}
          >
            Crear Nuevo Platillo
          </button>
        </div>

        <DishList
          dishes={dishes}
          categories={categories}
          onEdit={handleEditDish}
          onDelete={handleDeleteDish}
        />
      </div>

      {/* Modales */}
      {showCategoryForm && (
        <CategoryForm
          category={editingCategory}
          onSubmit={
            editingCategory ? handleUpdateCategory : handleCreateCategory
          }
          onClose={handleCloseCategoryForm}
        />
      )}

      {showDishForm && (
        <DishForm
          dish={editingDish}
          categories={categories}
          onSubmit={editingDish ? handleUpdateDish : handleCreateDish}
          onClose={handleCloseDishForm}
        />
      )}
    </div>
  );
};

export default AdminMenu;
