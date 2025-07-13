import React from "react";

interface Category {
  id: string;
  name: string;
  description?: string;
}

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onEdit,
  onDelete,
}) => {
  if (categories.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay categorías disponibles</p>
        <p>Crea tu primera categoría para comenzar</p>
      </div>
    );
  }

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <div className="category-info">
            <h3>{category.name}</h3>
            {category.description && (
              <p className="category-description">{category.description}</p>
            )}
          </div>
          <div className="category-actions">
            <button
              className="btn btn-secondary"
              onClick={() => onEdit(category)}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(category.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
