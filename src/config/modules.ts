import {
  Briefcase,
  CalendarCheck,
  Dumbbell,
  GraduationCap,
  Wallet,
  type LucideIcon,
} from "lucide-react";

// Lista central de módulos de la app.
// Para agregar un módulo nuevo: añádelo aquí y crea su carpeta en src/app/<slug>/page.tsx.
// El menú lateral y la página de inicio se actualizan solos a partir de esta lista.

export type AppModule = {
  slug: string; // parte de la URL, ej. "trabajo" -> /trabajo
  name: string;
  description: string;
  icon: LucideIcon;
  color: string; // clases de Tailwind para el color del ícono
};

export const modules: AppModule[] = [
  {
    slug: "trabajo",
    name: "Trabajo",
    description: "Tareas y responsabilidades del trabajo",
    icon: Briefcase,
    color: "text-sky-500 bg-sky-500/10",
  },
  {
    slug: "universidad",
    name: "Universidad",
    description: "Pendientes por asignatura",
    icon: GraduationCap,
    color: "text-violet-500 bg-violet-500/10",
  },
  {
    slug: "finanzas",
    name: "Finanzas",
    description: "Ingresos, gastos y presupuesto",
    icon: Wallet,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    slug: "habitos",
    name: "Hábitos",
    description: "Registro diario de hábitos",
    icon: CalendarCheck,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    slug: "entrenamiento",
    name: "Entrenamiento",
    description: "Rutinas y progreso en el gym",
    icon: Dumbbell,
    color: "text-rose-500 bg-rose-500/10",
  },
];

export function getModule(slug: string): AppModule {
  const found = modules.find((m) => m.slug === slug);
  if (!found) throw new Error(`Módulo no encontrado: ${slug}`);
  return found;
}
