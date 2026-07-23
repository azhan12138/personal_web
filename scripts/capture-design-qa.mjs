import { mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const targetUrl =
  process.env.QA_URL ?? "http://127.0.0.1:4173/personal_web/";
const outputDirectory = new URL("../qa/screenshots/", import.meta.url);
const sourceDirectory = new URL("../prototype/screenshots/", import.meta.url);
const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];
const comparisonViewports = viewports.filter(
  (viewport) => viewport.name !== "tablet",
);

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    await page.goto(targetUrl, { waitUntil: "networkidle" });

    await page.evaluate(async () => {
      const step = Math.max(window.innerHeight * 0.72, 480);
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo({ top: y, behavior: "instant" });
        await new Promise((resolve) => window.setTimeout(resolve, 40));
      }
      document
        .querySelectorAll("[data-reveal]")
        .forEach((element) => element.classList.add("is-visible"));
      window.scrollTo({ top: 0, behavior: "instant" });
    });

    await page.waitForTimeout(700);

    await page.screenshot({
      path: fileURLToPath(
        new URL(`implementation-${viewport.name}.png`, outputDirectory),
      ),
      fullPage: true,
    });
    await page.close();
  }

  for (const viewport of comparisonViewports) {
    const source = await readFile(
      new URL(`${viewport.name}-A-education.png`, sourceDirectory),
    );
    const implementation = await readFile(
      new URL(`implementation-${viewport.name}.png`, outputDirectory),
    );
    const imageWidth = viewport.name === "desktop" ? 700 : 360;
    const comparisonPage = await browser.newPage({
      viewport: { width: imageWidth * 2 + 56, height: 1000 },
    });

    await comparisonPage.setContent(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            * { box-sizing: border-box; }
            body {
              margin: 0;
              padding: 16px;
              color: #f6f5ef;
              background: #0f1e2c;
              font: 600 12px/1.4 ui-sans-serif, system-ui, sans-serif;
            }
            main { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
            figure { margin: 0; }
            figcaption { padding: 0 0 10px; letter-spacing: 0.08em; }
            img { width: 100%; height: auto; display: block; background: white; }
          </style>
        </head>
        <body>
          <main>
            <figure>
              <figcaption>SOURCE · PROTOTYPE A</figcaption>
              <img src="data:image/png;base64,${source.toString("base64")}" />
            </figure>
            <figure>
              <figcaption>IMPLEMENTATION · PRODUCTION</figcaption>
              <img src="data:image/png;base64,${implementation.toString("base64")}" />
            </figure>
          </main>
        </body>
      </html>
    `);

    await comparisonPage.screenshot({
      path: fileURLToPath(
        new URL(`comparison-${viewport.name}.png`, outputDirectory),
      ),
      fullPage: true,
    });
    await comparisonPage.close();
  }
} finally {
  await browser.close();
}
