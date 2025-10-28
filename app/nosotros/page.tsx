"use client";

/**
 * Página "Nosotros" — versión PRO con:
 * - Scroll Reveal en cada sección (Framer Motion + viewport)
 * - Hero institucional elegante (sin CTA redundante)
 * - Bloque “¿Quiénes somos?” con imagen grande y efecto 3D + zoom al hover
 * - Servicios con micro-interacciones sutiles
 * - Visítanos/Contacto con Google Maps embebido y contraste alto
 */

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Hammer,
  Home,
  Building2,
  DollarSign,
  ClipboardCheck,
} from "lucide-react";

/* ============================================================
   Helpers de animación (scroll reveal)
   ============================================================ */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const fadeUpSlow = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
};

/* ============================================================
   Imagen con efecto Tilt + Zoom
   ============================================================ */
function ImageTiltZoom({
  src = "/images/nosotros.jpg",
  alt = "Imagen institucional GESPO",
}: {
  src?: string;
  alt?: string;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)"
  );

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;
    const rotX = (py * -8).toFixed(2);
    const rotY = (px * 8).toFixed(2);
    setTransform(
      `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`
    );
  }, []);

  const handleLeave = useCallback(() => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)");
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 min-h-[320px] md:min-h-[420px] will-change-transform"
      style={{
        transform,
        transition: "transform 220ms ease",
        transformStyle: "preserve-3d",
      }}
      aria-label={alt}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${src}')`,
          transform: "translateZ(0.1px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />
      <div className="absolute -inset-8 opacity-0 hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(243,108,33,0.25),transparent_60%)]" />
    </div>
  );
}

/* ============================================================
   Página principal
   ============================================================ */
export default function NosotrosPage() {
  return (
    <main className="bg-gradient-to-b from-white to-neutral-50 text-neutral-800 scroll-smooth">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/images/oficina-gespo.jpg')] bg-cover bg-center opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-[28rem] h-[28rem] bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto text-center px-6"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-neutral-900">
            GESPO <span className="text-brand-orange">Inmobiliaria</span> &
            Constructora
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Expertos en <b>construcción</b>, <b>venta</b> y{" "}
            <b>administración de propiedades</b> en San Salvador de Jujuy.{" "}
            Comprometidos con la excelencia, la confianza y la innovación.
          </p>
        </motion.div>
      </section>

      {/* ===================== ¿QUIÉNES SOMOS? ===================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            {...fadeUpSlow}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900"
                initial={{ backgroundPositionX: "0%" }}
                whileInView={{ backgroundPositionX: ["0%", "100%"] }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                ¿Quiénes somos?
              </motion.span>
            </h2>

            <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
              <p>
                GESPO INMOBILIARIA I CONSTRUCTORA, es una empresa jujeña con
                corazón y compromiso, fundada en el año 2019 por el Martillero
                Público Eduardo A. Ortiz.
              </p>
              <p>
                Nacimos con el objetivo de brindar servicios profesionales en
                comercialización de propiedades, administración de alquileres y
                tasaciones, tareas fundamentales en el ejercicio de la
                profesión. Sin embargo, muy pronto entendimos que podíamos hacer
                mucho más por las familias jujeñas.
              </p>
              <p>
                En el año 2021, junto a la Martillera Publica Luz M. Castillo,
                dimos un paso más allá. Al ver la realidad de numerosas familias
                de la provincia, que soñaban con tener su propio hogar y se
                enfrentaban a la escasa oferta de viviendas, a la falta de
                opciones accesibles, sentimos la necesidad de transformar esta
                realidad que nos acompañaba ya hace muchos años.
              </p>
              <p>
                Contando ya con una perspectiva también muy personal de la
                situación, nos ilusionaba demasiado poder brindar aquello con lo
                que como familia también soñamos.
              </p>
              <p>
                Fue así como, impulsados por la capacitación constante, la
                planificación estratégica, y una profunda vocación de servicio,
                nació una nueva línea dentro de nuestra empresa: CONSTRUCTORA.
              </p>
              <p>
                Desde entonces trabajamos con pasión en el desarrollo de
                proyectos habitacionales, refacciones, ampliaciones, y
                construcción de locales comerciales, ofreciendo un servicio
                integral donde acompañamos personalmente a cada cliente, desde
                el inicio de la acción: toma de decisiones, elección de
                proyecto, planos y cada etapa de este importante proceso.
              </p>
              <p>
                Porque para GESPO, lo más importante es la satisfacción de
                nuestros clientes.
              </p>
              <p>
                En la actualidad contamos con más de 10 tipologías de viviendas,
                planes de financiación a medida y soluciones diseñadas para que
                cada vez más familias puedan cumplir el sueño de tener su casa
                propia.
              </p>
              <p className="font-semibold text-neutral-900">
                EN GESPO CONSTRUIMOS MÁS QUE VIVIENDAS: CONSTRUIMOS FUTUROS,
                CONSTRUIMOS ESPERANZA.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUpSlow}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ImageTiltZoom
              src="/images/nosotros.jpg"
              alt="Equipo y obra GESPO"
            />
            <p className="sr-only">Imagen institucional de GESPO.</p>
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICIOS ===================== */}
      <section id="servicios" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
          >
            Nuestros Servicios
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-600 mb-14 max-w-2xl mx-auto"
          >
            Soluciones integrales en construcción e inmobiliaria, combinando
            diseño, rentabilidad y una ejecución impecable.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Home className="w-10 h-10 text-brand-orange" />,
                title: "Construcción de casas, locales y oficinas",
              },
              {
                icon: <Hammer className="w-10 h-10 text-brand-orange" />,
                title: "Refacciones y ampliaciones",
              },
              {
                icon: <Building2 className="w-10 h-10 text-brand-orange" />,
                title: "Venta y alquiler de inmuebles",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-brand-orange" />,
                title: "Inversiones en pozo con alta rentabilidad",
              },
              {
                icon: (
                  <ClipboardCheck className="w-10 h-10 text-brand-orange" />
                ),
                title: "Tasación y administración de propiedades",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center border border-transparent hover:border-brand-orange/20"
              >
                <div className="mb-4 flex items-center justify-center bg-orange-50 rounded-full w-16 h-16 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-neutral-800 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VISÍTANOS / CONTACTO ===================== */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2">
          <div className="bg-neutral-950 text-white px-6 py-16 md:py-24 flex items-center">
            <div className="w-full max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-orange mb-6">
                Visítanos
              </h2>

              <div className="space-y-5 text-base">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="text-brand-orange" />
                  <span>Salta 1031, San Salvador de Jujuy</span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <Mail className="text-brand-orange" />
                  <a
                    href="mailto:alquileres@gespo-sas.com"
                    className="hover:text-brand-orange transition-colors"
                  >
                    alquileres@gespo-sas.com
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <Phone className="text-green-400" />
                  <a
                    href="https://wa.me/5493885177508"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition-colors"
                  >
                    3885 177508 (WhatsApp)
                  </a>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <Phone className="text-green-400" />
                  <a
                    href="https://wa.me/5493885203564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange transition-colors"
                  >
                    3885 203564 (WhatsApp)
                  </a>
                </div>
              </div>

              <p className="mt-10 text-neutral-400 text-sm">
                © {new Date().getFullYear()} GESPO Inmobiliaria & Constructora —
                Todos los derechos reservados.
              </p>
            </div>
          </div>

          <div className="min-h-[420px] md:min-h-[520px]">
            <iframe
              title="Ubicación GESPO - Salta 1031, San Salvador de Jujuy"
              src="https://www.google.com/maps?q=Salta%201031,%20San%20Salvador%20de%20Jujuy&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
