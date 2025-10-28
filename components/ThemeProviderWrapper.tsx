// @/components/ThemeProviderWrapper.tsx
"use client"; // CRÍTICO: Indica que este es un componente de cliente.

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Usamos React.PropsWithChildren<unknown> para incluir la prop 'children'
// y permitimos props adicionales (como attribute, defaultTheme, etc.) de next-themes.
export function ThemeProviderWrapper({
  children,
  ...props
}: React.PropsWithChildren<unknown>) {
  return (
    // Se usa 'as any' en las props de NextThemesProvider para evitar el error de tipado
    // "Cannot find module 'next-themes/dist/types'" sin perder funcionalidad.
    <NextThemesProvider {...(props as any)}>{children}</NextThemesProvider>
  );
}
