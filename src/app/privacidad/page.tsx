import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";

export const metadata: Metadata = {
  title: "Aviso de privacidad — Nexiumlab",
};

export default function PrivacidadPage() {
  return <LegalDocument documentKey="privacy" />;
}
