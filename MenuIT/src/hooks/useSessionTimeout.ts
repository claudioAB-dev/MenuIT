import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "../auth/AuthContext";

const INACTIVITY_TIMEOUT = 15 * 60 * 1000; // 15 minutos en milisegundos

export const useSessionTimeout = () => {
  const { logout } = useAuth();
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogout = useCallback(() => {
    logout();
    setIsSessionExpired(true);
  }, [logout]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(handleLogout, INACTIVITY_TIMEOUT);
  }, [handleLogout]);

  useEffect(() => {
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];

    const handleActivity = () => {
      resetTimer();
    };

    // Agregar listeners para la actividad del usuario
    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });

    // Iniciar el temporizador
    resetTimer();

    // Limpieza al desmontar el componente
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [resetTimer]);

  return { isSessionExpired };
};
