"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

// 🔸 Variantes de Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 pb-20 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,166,0,0.05),transparent_70%)]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-14 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 🧱 Columna de contenido */}
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            variants={itemVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-neutral-900"
            >
              Construimos{" "}
              <span className="text-brand-orange drop-shadow-sm">
                confianza
              </span>
              .
              <br />
              <span className="text-neutral-800">Administramos tu futuro.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed"
            >
              Somos tu inmobiliaria y constructora de confianza en{" "}
              <strong className="text-brand-orange">
                San Salvador de Jujuy
              </strong>
              . Expertos en venta, alquiler, lotes y proyectos con{" "}
              <strong>seguimiento profesional</strong>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              {/* 🎯 CTA Principal */}
              <Link
                href="/ventas"
                aria-label="Explorar propiedades en venta"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-orange text-white font-bold rounded-xl shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:bg-orange-600 transition duration-300 transform hover:scale-[1.03]"
              >
                Ver Propiedades
                <ArrowRight size={20} />
              </Link>

              {/* 💬 CTA Secundario */}
              <a
                href="https://wa.me/5493885177508"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-neutral-800 font-semibold rounded-xl border border-neutral-300 hover:border-brand-orange hover:text-brand-orange transition duration-200"
              >
                <Phone size={20} className="text-green-500" />
                Contactar por WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* 🏗️ Columna de imágenes */}
          <motion.div
            className="order-1 lg:order-2"
            variants={itemVariants}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {["hero-1.jpg", "hero-2.jpg", "hero-3.jpg", "hero-4.jpg"].map(
                (src, index) => (
                  <motion.div
                    key={src}
                    className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-500 ${
                      index === 0
                        ? "row-span-2 aspect-[4/5] md:aspect-[3/4] self-start"
                        : "aspect-[4/3]"
                    }`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04 }}
                  >
                    <Image
                      src={`/images/${src}`}
                      alt={`Obra de construcción ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-110"
                      priority={index < 2}
                    />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
