import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";

export const metadata: Metadata = {
  title: "Términos y condiciones — Nexiumlab",
};

export default function TerminosPage() {
  return <LegalDocument documentKey="terms" />;
}
