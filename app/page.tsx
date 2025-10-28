import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import PropertyCard from "@/components/ui/PropertyCard";
// No se necesitan imports de Lucide-react si usamos SVG inline

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* SECCIÓN PRINCIPAL: Accesos Rápidos (Usando el diseño original) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Accesos rápidos"
          subtitle="Explorá nuestras categorías y propiedades destacadas"
          // ELIMINADA: prop className="text-center mb-10" para evitar el error de tipado en SectionTitle
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Tarjeta 1: Venta de Dúplex */}
          <PropertyCard
            image="/images/venta1.jpg"
            title="Dúplex Los Perales"
            location="San Salvador de Jujuy"
            price="USD 95.000"
            status="EN VENTA"
            href="/ventas"
          />

          {/* Tarjeta 2: Alquiler de Departamento */}
          <PropertyCard
            image="/images/alquiler1.jpg"
            title="Depto Centro"
            location="Microcentro"
            price="$ 350.000"
            status="ALQUILER"
            href="/alquileres"
          />

          {/* Tarjeta 3: Lote en Venta */}
          <PropertyCard
            image="/images/lote1.jpg"
            title="Lote 600 m²"
            location="Zona Norte"
            price="USD 8.000"
            status="EN VENTA"
            href="/lotes"
          />
        </div>

        {/* CTA para ver más propiedades */}
        <div className="text-center mt-12">
          <Link
            href="/ventas"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-[1.02]"
          >
            Ver Todas las Propiedades
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 2. SECCIÓN DE AUTORIDAD Y CONTACTO RÁPIDO (Mejora la conversión y UX) */}
      <section className="bg-neutral-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            ¿Necesitás asesoramiento personalizado?
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Somos GESP Inmobiliaria y Constructora en San Salvador de Jujuy.
            Confía en nuestra experiencia para vender, alquilar o construir tu
            próxima propiedad.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5493885177508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-bold rounded-xl shadow-xl hover:bg-green-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.86-4.86A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72 17.65 17.65 0 0 0 .54 4.3l-.69.69a14.73 14.73 0 0 0 6.64 6.64l.69-.69a17.65 17.65 0 0 0 4.3.54 2 2 0 0 1 1.72 2v3z" />
              </svg>
              Contactar por WhatsApp
            </a>
            <Link
              href="/nosotros"
              // CORRECCIÓN: Se mantiene la prop className en Link, que es el uso estándar de Next.js
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-neutral-900 transition duration-300"
            >
              Conocé GESP
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
