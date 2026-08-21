import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/project-url-short-api/",
  plugins: [
    tailwindcss(),
  ],
});