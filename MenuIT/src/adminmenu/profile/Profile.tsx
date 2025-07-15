import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import {
  getMyRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../../services/restaurantService";
import { useAuth } from "../../auth/AuthContext"; // O tu método para obtener el token

import "./styles/Profile.css";

// Esquema de validación (sin cambios)
const restaurantSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
  address: z.string().min(5, "La dirección debe tener al menos 5 caracteres."),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 dígitos."),
});

type RestaurantFormData = z.infer<typeof restaurantSchema>;

interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  slug: string;
}

export default function Profile() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Obtén el token del contexto de autenticación
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RestaurantFormData>({
    resolver: zodResolver(restaurantSchema),
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      // 3. Asegúrate de que el token exista antes de hacer la llamada
      if (!token) {
        setIsLoading(false);
        toast.error("Sesión no válida. Por favor, inicia sesión de nuevo.");
        return;
      }
      try {
        // 4. Pasa el token al servicio
        const data = await getMyRestaurant(token);
        if (data) {
          setRestaurant(data);
          reset(data);
        }
      } catch (error) {
        toast.error("No se pudo cargar la información del restaurante.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurant();
  }, [reset, token]);

  const onSubmit = async (data: RestaurantFormData) => {
    if (!token) return;
    setIsSubmitting(true);
    try {
      let updatedRestaurant;
      if (restaurant) {
        // 5. Pasa el token en la actualización
        updatedRestaurant = await updateRestaurant(token, data);
        toast.success("Restaurante actualizado con éxito.");
      } else {
        // 6. Pasa el token en la creación
        updatedRestaurant = await createRestaurant(token, data);
        toast.success("Restaurante creado con éxito.");
      }
      setRestaurant(updatedRestaurant);
      reset(updatedRestaurant);
    } catch (error) {
      toast.error("Ocurrió un error. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!restaurant || !token) return;

    if (
      window.confirm(
        "¿Estás seguro de que quieres eliminar tu restaurante? Esta acción es irreversible."
      )
    ) {
      setIsSubmitting(true);
      try {
        // 7. Pasa el token para eliminar
        await deleteRestaurant(token);
        toast.success("Restaurante eliminado correctamente.");
        setRestaurant(null);
        reset({ name: "", address: "", phone: "" });
      } catch (error) {
        toast.error("No se pudo eliminar el restaurante.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isLoading) {
    return <div className="loading-message">Cargando perfil...</div>;
  }

  // El resto del JSX no cambia
  return (
    <div className="profile-container">
      {/* ... El mismo JSX de la respuesta anterior ... */}
    </div>
  );
}
