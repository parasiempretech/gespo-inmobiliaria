import SectionTitle from "@/components/ui/SectionTitle";
import PropertyCard from "@/components/ui/PropertyCard";

export default function Page() {
  return (
    <main className="section">
      <SectionTitle title="CONSTRUCCION" subtitle="Servicios de construcción: llave en mano, dirección de obra y más." />
      <div className="grid md:grid-cols-3 gap-6">
        <PropertyCard image="/images/venta1.jpg" title="Ejemplo 1" location="San Salvador de Jujuy" price="USD 90.000" status="EN VENTA" />
        <PropertyCard image="/images/alquiler1.jpg" title="Ejemplo 2" location="San Salvador de Jujuy" price="$ 350.000" status="ALQUILER" />
        <PropertyCard image="/images/lote1.jpg" title="Ejemplo 3" location="Zona Norte" price="USD 8.000" status="EN VENTA" />
      </div>
    </main>
  );
}
