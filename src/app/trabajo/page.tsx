import { ComingSoon, ModuleHeader } from "@/components/module-header";
import { getModule } from "@/config/modules";

export default function TrabajoPage() {
  return (
    <>
      <ModuleHeader mod={getModule("trabajo")} />
      <ComingSoon />
    </>
  );
}