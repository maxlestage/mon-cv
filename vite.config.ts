import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Site servi à la racine "/".
// Requiert un dépôt <utilisateur>.github.io ou un domaine personnalisé.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
