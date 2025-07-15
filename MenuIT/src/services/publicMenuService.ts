// src/services/publicMenuService.ts
const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export const getPublicMenu = async (slug: string) => {
  const response = await fetch(`${API_URL}/menu/${slug}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Restaurante no encontrado");
    }
    throw new Error("No se pudo cargar el menú");
  }
  return response.json();
};
