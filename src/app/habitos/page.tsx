import { ComingSoon, ModuleHeader } from "@/components/module-header";
import { getModule } from "@/config/modules";

export default function HabitosPage() {
  return (
    <>
      <ModuleHeader mod={getModule("habitos")} />
      <ComingSoon />
    </>
  );
}