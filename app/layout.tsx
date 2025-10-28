import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/*
        Atributo "class" controlado por next-themes para modo oscuro/claro.
        El "suppressHydrationWarning" evita el parpadeo inicial de color.
      */}
      <body
        className={`${montserrat.variable} ${inter.variable} min-h-screen font-sans antialiased transition-colors duration-300 bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        {/* ThemeProvider envuelve toda la aplicación */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false} // evita saltos bruscos
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
