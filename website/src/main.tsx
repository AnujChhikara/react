import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import RootLayout from "./routes/root";
import HomePage from "./routes/home";
import UseScreenshotPage from "./routes/hooks/use-screenshot";
import UseViewportPage from "./routes/hooks/use-viewport";
import FlowDiagramPage from "./routes/hooks/flow-diagram";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hooks/use-screenshot" element={<UseScreenshotPage />} />
          <Route path="hooks/use-viewport" element={<UseViewportPage />} />
          <Route path="hooks/flow-diagram" element={<FlowDiagramPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
