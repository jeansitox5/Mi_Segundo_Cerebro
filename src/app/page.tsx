import Link from "next/link";
import { modules } from "@/config/modules";

// Página de inicio (ruta "/"): un panel con acceso a cada módulo.
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Hola 👋</h1>
      <p className="mt-1 mb-8 text-foreground/60">¿Qué vamos a organizar hoy?</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.slug}
              href={`/${m.slug}`}
              className="rounded-xl border border-foreground/10 p-5 transition-colors hover:bg-foreground/5"
            >
              <div className={`mb-4 inline-flex rounded-lg p-2 ${m.color}`}>
                <Icon className="size-5" />
              </div>
              <h2 className="font-semibold">{m.name}</h2>
              <p className="text-sm text-foreground/60">{m.description}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
