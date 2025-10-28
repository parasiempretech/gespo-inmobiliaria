// @/components/ui/ThemeToggle.tsx
"use client"; // Importante para usar hooks y estado

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// Aquí importarías el ícono que uses (ej: Sun, Moon)

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 1. Efecto: se ejecuta SÓLO en el cliente después del primer render.
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Si aún no está montado (SSR), no renderizamos nada para evitar errores.
  if (!mounted) {
    return null;
  }

  // 3. Renderizado del botón
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-neutral-700 transition-colors"
      aria-label="Toggle theme"
    >
      {/* Aquí debes poner el ícono.
        Si es modo 'dark', muestra el ícono del Sol (para cambiar a claro).
        Si es modo 'light', muestra el ícono de la Luna (para cambiar a oscuro).
      */}
      {theme === "dark" ? (
        <span>☀️</span> // Reemplazar con Icono de Sol
      ) : (
        <span>🌙</span> // Reemplazar con Icono de Luna
      )}
    </button>
  );
}
