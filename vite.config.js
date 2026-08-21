import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/shortly_website_project/",
  plugins: [
    tailwindcss(),
  ],
});