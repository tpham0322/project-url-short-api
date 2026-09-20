import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/project-url-short-api-react/",
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    assetsDir: "assets"
  }
});