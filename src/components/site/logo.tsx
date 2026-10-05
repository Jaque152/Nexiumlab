import { cn } from "@/lib/utils";

export function Logo({ variant = "default" }: { variant?: "default" | "cream" }) {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-primary shadow-[0_4px_10px_rgba(0,71,255,0.3)] transition-transform duration-300 group-hover:scale-105">
        <span className="font-sans text-lg font-black text-white">N</span>
        {/* Punto Lima Ácido animado */}
        <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-accent border-2 border-white animate-pulse" />
      </div>
      <span
        className={cn(
          "font-sans text-xl font-black tracking-tighter transition-colors",
          variant === "cream" ? "text-white" : "text-dark"
        )}
      >
        Nexium<span className="text-primary">Lab</span>
      </span>
    </div>
  );
}
