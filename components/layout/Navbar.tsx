"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

/* =========================================================
   Enlaces de navegación
   ========================================================= */
const NAV_LINKS = [
  { href: "/lotes", label: "LOTES" },
  { href: "/ventas", label: "VENTAS" },
  { href: "/alquileres", label: "ALQUILERES" },
  { href: "/proyectos", label: "PROYECTOS" },
  { href: "/entregas", label: "ENTREGAS" },
  { href: "/construccion", label: "CONSTRUCCIÓN" },
  { href: "/nosotros", label: "NOSOTROS" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Cierra al cambiar de ruta */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Bloqueo de scroll del documento mientras el menú está abierto */
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (open) {
      const scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      html.style.overflow = "hidden";
      return () => {
        const y = body.style.top;
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        html.style.overflow = "";
        if (y) window.scrollTo(0, parseInt(y || "0") * -1);
      };
    }
  }, [open]);

  /* Cerrar con ESC */
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  /* Estilos de links */
  const active =
    "text-white font-extrabold drop-shadow-sm relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-10 after:bg-white after:rounded-full";
  const idle = "text-white/90 hover:text-white transition-colors";

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ir a la página de inicio de GESPO Inmobiliaria"
          className="flex items-center gap-3 hover:scale-[1.03] transition-transform"
        >
          <Image
            src="/logo-gespo.png"
            alt="Logo GESPO"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-brand-orange/60 shadow-md"
            priority
          />
          <div className="leading-tight">
            <p className="text-[14px] sm:text-[15px] font-extrabold text-neutral-900 dark:text-white">
              GESPO
            </p>
            <p className="text-[12px] sm:text-[13px] font-extrabold text-brand-orange tracking-tight">
              INMOBILIARIA
            </p>
          </div>
        </Link>

        {/* Acciones derecha (hamburguesa fija + tema) */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
          >
            {open ? (
              <X size={22} className="text-neutral-900 dark:text-neutral-50" />
            ) : (
              <Menu
                size={22}
                className="text-neutral-900 dark:text-neutral-50"
              />
            )}
          </button>
        </div>
      </div>

      {/* Overlay FULLSCREEN naranja sólido (sin transparencia) */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-250 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Fondo naranja sólido: usa tu color de marca */}
        {/* Asegurate de tener bg-brand-orange en tailwind.config; si no, reemplazá por bg-[#f36c21] */}
        <div className="absolute inset-0 bg-brand-orange" />

        {/* Contenido del menú */}
        <div
          className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center"
          role="dialog"
          aria-modal="true"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-2xl sm:text-3xl uppercase tracking-wide px-5 py-2 rounded-lg transition-all duration-200 will-change-transform hover:scale-[1.03] ${
                pathname === link.href ? active : idle
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Botón cerrar */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="absolute top-6 right-6 text-white/95 hover:text-white transition-transform hover:scale-110"
          >
            <X size={30} />
          </button>

          {/* Línea decorativa inferior */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full bg-white/80" />
        </div>
      </div>
    </header>
  );
}
