import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "modern-normalize";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);