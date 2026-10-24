import { Brain, House } from "lucide-react";
import { modules } from "@/config/modules";
import { NavLink } from "./nav-link";

// Menú de navegación.
// En pantallas grandes es una barra lateral; en el celular es una barra horizontal arriba.
export function Sidebar() {
  return (
    <aside className="border-b border-foreground/10 md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0 md:border-r md:border-b-0">
      <div className="flex items-center gap-2 px-4 pt-4 pb-2 md:px-5 md:pt-6 md:pb-6">
        <Brain className="size-6 text-violet-500" />
        <span className="font-semibold">Mi segundo cerebro</span>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-2 pb-3 md:flex-col md:px-3">
        <NavLink href="/">
          <House className="size-4" />
          Inicio
        </NavLink>
        {modules.map((m) => (
          <NavLink key={m.slug} href={`/${m.slug}`}>
            <m.icon className="size-4" />
            {m.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
