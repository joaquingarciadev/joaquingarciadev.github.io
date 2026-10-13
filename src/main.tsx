import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

const root = document.getElementById("root")!;

// En producción el HTML viene prerenderizado: React solo lo hidrata.
// En desarrollo (root vacío) se renderiza normalmente.
if (root.hasChildNodes()) {
    hydrateRoot(root, <App />);
} else {
    createRoot(root).render(<App />);
}
