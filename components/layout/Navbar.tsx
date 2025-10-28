"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const nav = [
  { href: "/lotes", label: "LOTES" },
  { href: "/ventas", label: "VENTAS" },
  { href: "/alquileres", label: "ALQUILERES" },
  { href: "/proyectos", label: "PROYECTOS" },
  { href: "/entregas", label: "ENTREGAS" },
  { href: "/construccion", label: "CONSTRUCCIÓN" },
  { href: "/nosotros", label: "NOSOTROS" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const activeLinkClass =
    "text-brand-orange dark:text-orange-400 font-semibold";
  const defaultLinkClass =
    "text-neutral-700 dark:text-neutral-200 hover:text-brand-orange dark:hover:text-orange-400";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md
      bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200 dark:border-neutral-800 shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105"
          aria-label="Ir a la página de inicio de GESPO Inmobiliaria"
        >
          <Image
            src="/logo-gespo.png"
            alt="GESPO Logo"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-brand-orange/50"
            priority
          />
          {/* Título responsivo, siempre apilado */}
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-[14px] sm:text-[15px] text-neutral-900 dark:text-white">
              GESPO
            </span>
            <span className="font-extrabold text-[12px] sm:text-[13px] text-brand-orange tracking-tight">
              INMOBILIARIA
            </span>
          </div>
        </Link>

        {/* BOTONES DERECHA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Botón hamburguesa SIEMPRE visible */}
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={24} className="text-neutral-900 dark:text-neutral-50" />
            ) : (
              <Menu
                size={24}
                className="text-neutral-900 dark:text-neutral-50"
              />
            )}
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open
            ? "max-h-[500px] opacity-100 border-t border-neutral-200 dark:border-neutral-800"
            : "max-h-0 opacity-0 border-t-0"
        } bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-xl`}
      >
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-2 px-3 uppercase font-semibold text-lg rounded-lg transition-colors duration-200 ${
                pathname === item.href
                  ? `${activeLinkClass} bg-neutral-100 dark:bg-neutral-800`
                  : `${defaultLinkClass} hover:bg-neutral-50 dark:hover:bg-neutral-800`
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* BOTÓN WHATSAPP */}
          <a
            href="https://wa.me/5493885177508"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-lg transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <Phone size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
