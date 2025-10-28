import { ReactNode } from "react";
export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">{title}</h2>
      {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
    </div>
  );
}
