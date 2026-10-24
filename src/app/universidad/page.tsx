import { ComingSoon, ModuleHeader } from "@/components/module-header";
import { getModule } from "@/config/modules";

export default function UniversidadPage() {
  return (
    <>
      <ModuleHeader mod={getModule("universidad")} />
      <ComingSoon />
    </>
  );
}