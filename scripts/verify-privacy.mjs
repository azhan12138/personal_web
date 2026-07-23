import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = new URL("../dist/", import.meta.url);
const textExtensions = new Set([".css", ".html", ".js", ".json", ".map", ".txt"]);
const privacyPolicy = JSON.parse(
  await readFile(new URL("../privacy-policy.json", import.meta.url), "utf8"),
);
const { approvedEmail, forbiddenTerms } = privacyPolicy;

async function collectTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTextFiles(path)));
    } else if (textExtensions.has(extname(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

const outputPath = fileURLToPath(outputDirectory);
const files = await collectTextFiles(outputPath);
const findings = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  const contentWithoutApprovedEmail = content.replaceAll(approvedEmail, "");

  for (const term of forbiddenTerms) {
    if (content.includes(term)) {
      findings.push(`${relative(outputPath, file)}: ${term}`);
    }
  }

  const exposedPhone = contentWithoutApprovedEmail.match(
    /(?<!\d)1[3-9]\d{9}(?!\d)/,
  );
  if (exposedPhone) {
    findings.push(
      `${relative(outputPath, file)}: exposed phone ${exposedPhone[0]}`,
    );
  }
}

if (findings.length > 0) {
  console.error("Privacy verification failed:");
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exitCode = 1;
} else {
  console.log(`Privacy verification passed across ${files.length} build files.`);
}
