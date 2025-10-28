import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 dark:bg-neutral-950 text-neutral-300 border-t border-neutral-800 mt-20">
      {/* Contenido principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo e información */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-gespo.png"
              alt="GESPO" // Corregido
              width={48}
              height={48}
              className="rounded-full ring-2 ring-brand-orange"
            />
            <div>
              <p className="font-extrabold text-white text-lg">GESPO</p>{" "}
              {/* Corregido */}
              <p className="text-xs text-brand-orange font-medium uppercase tracking-wider">
                Inmobiliaria & Constructora
              </p>
            </div>
          </div>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            Venta y alquiler de propiedades. Construcción de viviendas de
            calidad en San Salvador de Jujuy.
          </p>
        </div>

        {/* Secciones */}
        <div>
          <h4 className="font-semibold text-white mb-4 border-b border-neutral-700 pb-2">
            Secciones
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              "lotes",
              "ventas",
              "alquileres",
              "proyectos",
              "entregas",
              "construccion",
              "nosotros",
            ].map((section) => (
              <li key={section}>
                <Link
                  href={`/${section}`}
                  className="hover:text-brand-orange transition duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-white mb-4 border-b border-neutral-700 pb-2">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin
                size={18}
                className="flex-shrink-0 mt-0.5 text-brand-orange"
              />
              <span>Salta 1031, San Salvador de Jujuy</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail
                size={18}
                className="flex-shrink-0 mt-0.5 text-brand-orange"
              />
              <a
                href="mailto:alquileres@gesposas.com"
                className="hover:text-brand-orange transition duration-200"
              >
                alquileres@gesposas.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone
                size={18}
                className="flex-shrink-0 mt-0.5 text-brand-orange"
              />
              <a
                href="tel:+5493885177508"
                className="hover:text-brand-orange transition duration-200"
              >
                +54 9 3885 17-7508
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold text-white mb-4 border-b border-neutral-700 pb-2">
            Redes Sociales
          </h4>
          <div className="flex items-center gap-4">
            <a
              aria-label="Instagram"
              href="https://instagram.com/gespoinmobiliariaconstructora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-800 rounded-full text-white hover:bg-brand-orange hover:scale-110 transition duration-300"
            >
              <Instagram size={20} />
            </a>

            <a
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-800 rounded-full text-white hover:bg-brand-orange hover:scale-110 transition duration-300"
            >
              <Facebook size={20} />
            </a>

            <a
              aria-label="TikTok"
              href="https://tiktok.com/@gespoinmobiliaria"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-800 rounded-full text-white hover:bg-brand-orange hover:scale-110 transition duration-300 flex items-center justify-center"
            >
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-neutral-800 bg-neutral-950 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-neutral-500 text-center md:text-left">
            © {currentYear} GESPO Inmobiliaria & Constructora. Todos los
            derechos {/* Corregido */}
            reservados.
          </p>

          {/* Botón de tema integrado elegantemente */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>

          <p className="text-xs text-neutral-600">
            Desarrollado por{" "}
            <span className="text-brand-orange font-medium hover:underline">
              ParaSiempreTech
            </span>{" "}
            🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
