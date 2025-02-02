import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
const root = createRoot(document.getElementById("appRoot") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
