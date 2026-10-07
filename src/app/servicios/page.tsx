import type { Metadata } from "next";
import { ServiciosClient } from "@/components/site/servicios-client";

export const metadata: Metadata = {
  title: "Servicios — Nexiumlab",
  description:
    "Conoce los servicios digitales de Nexiumlab: redes sociales, SEO, publicidad digital, email marketing, desarrollo web y content marketing.",
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
