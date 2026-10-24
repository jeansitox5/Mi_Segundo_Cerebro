import { ComingSoon, ModuleHeader } from "@/components/module-header";
import { getModule } from "@/config/modules";

export default function FinanzasPage() {
  return (
    <>
      <ModuleHeader mod={getModule("finanzas")} />
      <ComingSoon />
    </>
  );
}