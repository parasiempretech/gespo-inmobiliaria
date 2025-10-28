import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  location: string;
  price?: string;
  status?: "EN VENTA" | "ALQUILER" | "RESERVADA" | "VENDIDA";
  href?: string;
};

export default function PropertyCard({ image, title, location, price, status="EN VENTA", href="#" }: Props) {
  const badgeColor = status === "ALQUILER" ? "bg-blue-600" : status === "RESERVADA" ? "bg-yellow-500" : status === "VENDIDA" ? "bg-red-600" : "bg-brand-orange";
  return (
    <div className="card group">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition" />
        <span className={`absolute left-3 top-3 text-white text-xs font-bold px-3 py-1 rounded-full ${badgeColor}`}>{status}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-neutral-600">{location}</p>
        {price && <p className="mt-2 font-extrabold text-brand-orange">{price}</p>}
        <Link href={href} className="btn-primary mt-3 inline-block">Consultar</Link>
      </div>
    </div>
  );
}
