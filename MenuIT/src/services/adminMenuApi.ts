const API_URL = `${import.meta.env.VITE_API_URL}/api/adminmenu`;

const getAuthHeaders = (token: string) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// --- SERVICIOS PARA CATEGORÍAS ---

export const getCategories = async (token: string) => {
  const response = await fetch(`${API_URL}/categories`, {
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error("Error al obtener las categorías");
  return response.json();
};

export const createCategory = async (
  token: string,
  categoryData: { name: string; description?: string }
) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: getAuthHeaders(token),
    body: JSON.stringify(categoryData),
  });
  if (!response.ok) throw new Error("Error al crear la categoría");
  return response.json();
};

export const updateCategory = async (
  token: string,
  categoryId: string,
  categoryData: { name: string; description?: string }
) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}`, {
    method: "PUT",
    headers: getAuthHeaders(token),
    body: JSON.stringify(categoryData),
  });
  if (!response.ok) throw new Error("Error al actualizar la categoría");
  return response.json();
};

export const deleteCategory = async (token: string, categoryId: string) => {
  const response = await fetch(`${API_URL}/categories/${categoryId}`, {
    method: "DELETE",
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error("Error al eliminar la categoría");
  return response.json();
};

// --- SERVICIOS PARA PLATILLOS ---

export const getDishes = async (token: string) => {
  const response = await fetch(`${API_URL}/dishes`, {
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error("Error al obtener los platillos");
  return response.json();
};

export const createDish = async (token: string, dishData: any) => {
  const response = await fetch(`${API_URL}/dishes`, {
    method: "POST",
    headers: getAuthHeaders(token),
    body: JSON.stringify(dishData),
  });
  if (!response.ok) throw new Error("Error al crear el platillo");
  return response.json();
};

export const updateDish = async (
  token: string,
  dishId: string,
  dishData: any
) => {
  const response = await fetch(`${API_URL}/dishes/${dishId}`, {
    method: "PUT",
    headers: getAuthHeaders(token),
    body: JSON.stringify(dishData),
  });
  if (!response.ok) throw new Error("Error al actualizar el platillo");
  return response.json();
};

export const deleteDish = async (token: string, dishId: string) => {
  const response = await fetch(`${API_URL}/dishes/${dishId}`, {
    method: "DELETE",
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error("Error al eliminar el platillo");
  return response.json();
};
