import type { AppModule } from "@/config/modules";

// Encabezado que comparten todas las páginas de módulo.
export function ModuleHeader({ mod }: { mod: AppModule }) {
  const Icon = mod.icon;

  return (
    <header className="mb-8 flex items-center gap-4">
      <div className={`rounded-xl p-3 ${mod.color}`}>
        <Icon className="size-6" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{mod.name}</h1>
        <p className="text-sm text-foreground/60">{mod.description}</p>
      </div>
    </header>
  );
}

// Aviso temporal mientras el módulo no está construido.
export function ComingSoon() {
  return (
    <div className="rounded-xl border border-dashed border-foreground/20 p-10 text-center text-foreground/60">
      Este módulo está en construcción 🚧
    </div>
  );
}
