import type { Metadata } from "next";
import { PreciosClient } from "@/components/site/precios-client";

export const metadata: Metadata = {
  title: "Precios — Nexiumlab",
  description:
    "Consulta los paquetes y precios de Nexiumlab. Elige una opción, revisa sus características y agrégala al carrito para continuar con tu contratación.",
};

export default function PreciosPage() {
  return <PreciosClient />;
}
