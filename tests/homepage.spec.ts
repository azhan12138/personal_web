import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
] as const;

for (const viewport of viewports) {
  test(`visitor can understand the homepage identity on ${viewport.name}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("./");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /罗仕展.*产品与智能体.*新的创造方式/s,
      }),
    ).toBeVisible();
    await expect(
      page.getByText("我想看看，AI 能不能让一个人的想法走得更远。"),
    ).toBeVisible();
    await expect(
      page.getByText("专注 AI Native 的 AI 产品经理与独立开发者"),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: "罗仕展在思考者雕塑前的照片" }),
    ).toBeVisible();

    const pageWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(pageWidth).toBeLessThanOrEqual(viewport.width);
  });
}

test("production page does not expose prototype controls", async ({ page }) => {
  await page.goto("./");

  await expect(page.getByText("THROWAWAY PROTOTYPE")).toHaveCount(0);
  await expect(page.getByText("Research Brief / 研究简报")).toHaveCount(0);
  await expect(page.getByText("Open Notebook / 开放笔记")).toHaveCount(0);
});
