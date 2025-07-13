import React from "react";

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

interface DishListProps {
  dishes: Dish[];
  categories: Category[];
  onEdit: (dish: Dish) => void;
  onDelete: (dishId: string) => void;
}

const DishList: React.FC<DishListProps> = ({
  dishes,
  categories,
  onEdit,
  onDelete,
}) => {
  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Sin categoría";
  };

  // Agrupar platillos por categoría
  const groupedDishes = categories.reduce((acc, category) => {
    const categoryDishes = dishes.filter(
      (dish) => dish.categoryId === category.id
    );
    if (categoryDishes.length > 0) {
      acc[category.name] = categoryDishes;
    }
    return acc;
  }, {} as { [key: string]: Dish[] });

  // Platillos sin categoría
  const dishesWithoutCategory = dishes.filter(
    (dish) => !categories.find((cat) => cat.id === dish.categoryId)
  );

  if (dishesWithoutCategory.length > 0) {
    groupedDishes["Sin categoría"] = dishesWithoutCategory;
  }

  if (dishes.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay platillos disponibles</p>
        <p>Crea tu primer platillo para comenzar</p>
      </div>
    );
  }

  return (
    <div className="dish-list">
      {Object.entries(groupedDishes).map(([categoryName, categoryDishes]) => (
        <div key={categoryName} className="category-group">
          <h3 className="category-title">{categoryName}</h3>
          <div className="dishes-grid">
            {categoryDishes.map((dish) => (
              <div
                key={dish.id}
                className={`dish-item ${!dish.isActive ? "inactive" : ""}`}
              >
                <div className="dish-info">
                  <h4>{dish.name}</h4>
                  {dish.description && (
                    <p className="dish-description">{dish.description}</p>
                  )}
                  <div className="dish-meta">
                    <span className="dish-price">${dish.price.toFixed(2)}</span>
                    <span
                      className={`dish-status ${
                        dish.isActive ? "active" : "inactive"
                      }`}
                    >
                      {dish.isActive ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
                <div className="dish-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={() => onEdit(dish)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(dish.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishList;
