import { ComingSoon, ModuleHeader } from "@/components/module-header";
import { getModule } from "@/config/modules";

export default function EntrenamientoPage() {
  return (
    <>
      <ModuleHeader mod={getModule("entrenamiento")} />
      <ComingSoon />
    </>
  );
}