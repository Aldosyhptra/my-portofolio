import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Dipakai skrip scripts/prerender.mjs saat build: HTML statis untuk crawler.
export function render() {
  return renderToString(<App />);
}