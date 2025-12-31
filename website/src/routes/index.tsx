    import { createFileRoute } from "@tanstack/react-router";
import { HomeModule } from "@/modules/home";
 
    export const Route = createFileRoute("/")({
      component: App,
    });

    function App() {
      return (
        <HomeModule />
      );
    }
