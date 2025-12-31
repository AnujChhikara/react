import { createFileRoute } from "@tanstack/react-router";
import { HooksModule } from "@/modules/hooks";

export const Route = createFileRoute("/hooks")({
  component: HooksPage,
});

function HooksPage() {
  return <HooksModule />;
}

