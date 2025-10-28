import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Montserrat, Inter } from "next/font/google";
import type { Metadata } from "next";

/* =========================================================
   🔤 TIPOGRAFÍAS VARIABLES (GOOGLE FONTS)
   ========================================================= */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap", // Evita FOIT (texto invisible al cargar fuente)
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* =========================================================
   🌐 METADATOS GLOBALES (SEO + OPEN GRAPH)
   ========================================================= */
export const metadata: Metadata = {
  title: {
    default: "GESPO Inmobiliaria & Constructora",
    template: "%s | GESPO Inmobiliaria",
  },
  description:
    "Inmobiliaria y constructora líder en San Salvador de Jujuy. Venta, alquiler y construcción de propiedades con confianza y seguimiento profesional.",
  keywords: [
    "inmobiliaria",
    "constructora",
    "San Salvador de Jujuy",
    "venta de propiedades",
    "alquileres",
    "proyectos",
    "lotes",
    "GESPO",
  ],
  openGraph: {
    title: "GESPO Inmobiliaria & Constructora",
    description:
      "Confianza, experiencia y seguimiento profesional en el norte argentino.",
    url: "https://gespo-inmobiliaria.vercel.app",
    siteName: "GESPO Inmobiliaria",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GESPO Inmobiliaria",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================================================
   🧱 LAYOUT PRINCIPAL
   ========================================================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} min-h-screen font-sans antialiased transition-colors duration-300 bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-brand-orange/20 selection:text-brand-orange`}
      >
        {/* =====================================================
           🎨 THEME PROVIDER (modo claro / oscuro)
           ===================================================== */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* =====================================================
             📐 ESTRUCTURA BASE
             ===================================================== */}
          <div className="flex flex-col min-h-screen">
            {/* 🔝 NAVBAR FIJO */}
            <Navbar />

            {/* 🧩 CONTENIDO PRINCIPAL */}
            <main className="flex-grow fade-in">{children}</main>

            {/* 🔚 FOOTER GLOBAL */}
            <Footer />
          </div>

          {/* ⬆️ BOTÓN SCROLL TO TOP */}
          <ScrollToTop />
        </ThemeProvider>

        {/* =====================================================
           🚀 RENDIMIENTO + EXPERIENCIA DE USUARIO
           ===================================================== */}
        <noscript>
          <div className="p-4 text-center text-sm bg-red-500 text-white">
            Este sitio funciona mejor con JavaScript habilitado.
          </div>
        </noscript>
      </body>
    </html>
  );
}
