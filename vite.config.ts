import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import siteConfig from "./site.config.json" with { type: "json" };

export default defineConfig({
  base: siteConfig.basePath,
  plugins: [
    react(),
    {
      name: "inject-public-site-url",
      transformIndexHtml(html) {
        return html.replaceAll("__PUBLIC_SITE_URL__", siteConfig.publicUrl);
      },
    },
  ],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
  },
});
