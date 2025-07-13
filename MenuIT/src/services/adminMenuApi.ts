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

// ... (Puedes agregar aquí updateCategory y deleteCategory de forma similar)

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

// ... (Puedes agregar aquí updateDish y deleteDish de forma similar)
