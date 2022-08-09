import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./NeueHaasGrotText-65Medium-Trial.otf";
import "minireset.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
