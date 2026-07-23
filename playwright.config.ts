import { defineConfig } from "@playwright/test";
import siteConfig from "./site.config.json" with { type: "json" };

const localSiteUrl = new URL(
  siteConfig.basePath,
  "http://127.0.0.1:4173",
).href;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: localSiteUrl,
    channel: process.env.CI ? undefined : "chrome",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run preview -- --host 127.0.0.1 --port 4173 --strictPort",
    url: localSiteUrl,
    reuseExistingServer: !process.env.CI,
  },
});
