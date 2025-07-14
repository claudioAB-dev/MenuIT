export interface Category {
  id: string;
  name: string;
  description?: string;
}

// Interfaz para los datos que se obtienen de la API
export interface Dish {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  isActive: boolean;
}

// Interfaz para el payload que se envía a la API para crear/actualizar un platillo.
// Esto soluciona la inconsistencia de nombres de campo.
export interface DishPayload {
  name: string;
  description?: string;
  price: number;
  category_id: string; // Nombre de campo esperado por el backend
  is_active: boolean; // Nombre de campo esperado por el backend
}

// Interfaz para el payload de categorías (para mayor claridad)
export interface CategoryPayload {
  name: string;
  description?: string;
}

export interface DishListProps {
  dishes: Dish[];
  categories: Category[];
  onEdit: (dish: Dish) => void;
  onDelete: (dishId: string) => void;
}
