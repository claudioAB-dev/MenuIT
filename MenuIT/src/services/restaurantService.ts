const API_URL = `${import.meta.env.VITE_API_URL}/api/admin`;

const getAuthHeaders = (token: string) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

interface RestaurantData {
  name: string;
  address: string;
  phone: string;
}

// --- SERVICIOS PARA RESTAURANTE ---

export const getMyRestaurant = async (token: string) => {
  const response = await fetch(`${API_URL}/restaurant`, {
    headers: getAuthHeaders(token),
  });
  // Si la respuesta es 404, no es un error fatal, simplemente no hay restaurante.
  if (response.status === 404) {
    return null;
  }
  if (!response.ok)
    throw new Error("Error al obtener los datos del restaurante");
  return response.json();
};

export const createRestaurant = async (
  token: string,
  restaurantData: RestaurantData
) => {
  const response = await fetch(`${API_URL}/restaurant`, {
    method: "POST",
    headers: getAuthHeaders(token),
    body: JSON.stringify(restaurantData),
  });
  if (!response.ok) throw new Error("Error al crear el restaurante");
  return response.json();
};

export const updateRestaurant = async (
  token: string,
  restaurantData: RestaurantData
) => {
  const response = await fetch(`${API_URL}/restaurant`, {
    method: "PUT",
    headers: getAuthHeaders(token),
    body: JSON.stringify(restaurantData),
  });
  if (!response.ok) throw new Error("Error al actualizar el restaurante");
  return response.json();
};

export const deleteRestaurant = async (token: string) => {
  const response = await fetch(`${API_URL}/restaurant`, {
    method: "DELETE",
    headers: getAuthHeaders(token),
  });
  if (!response.ok) throw new Error("Error al eliminar el restaurante");
  return response.json();
};
