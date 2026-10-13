// Entrada usada solo al compilar (scripts/prerender.mjs) para generar el HTML inicial
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import "./i18n";

export function render() {
    return renderToString(<App />);
}
