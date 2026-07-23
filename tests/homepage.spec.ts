import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
] as const;

const releaseViewports = [
  ...viewports,
  { name: "tablet", width: 768, height: 1024 },
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

for (const viewport of viewports) {
  test(`education is complete and readable on ${viewport.name}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("./");

    const mainSections = page.locator("main > section");
    await expect(mainSections.nth(1)).toHaveAttribute("id", "education");

    const education = page.locator("#education");
    await expect(
      education.getByRole("heading", {
        level: 2,
        name: /教育经历.*理解问题的起点/s,
      }),
    ).toBeVisible();

    const sjtu = education.getByRole("article").filter({
      has: page.getByRole("heading", { name: "上海交通大学" }),
    });
    await expect(sjtu).toContainText("2025.09 — 2028.03");
    await expect(sjtu).toContainText("安泰经济与管理学院");
    await expect(sjtu).toContainText("管理科学与工程 · 硕士");
    for (const course of [
      "运筹学：确定性模型",
      "运筹学：随机性模型",
      "计算文本分析",
      "强化学习",
      "多元统计分析",
      "智能体建模与仿真",
    ]) {
      await expect(sjtu.getByText(course, { exact: true })).toBeVisible();
    }
    await expect(sjtu).toContainText("相关研究仍在进行中");

    const swufe = education.getByRole("article").filter({
      has: page.getByRole("heading", { name: "西南财经大学" }),
    });
    await expect(swufe).toContainText("2021.09 — 2025.06");
    await expect(swufe).toContainText("管理科学与工程学院");
    await expect(swufe).toContainText("大数据管理与应用 · 学士");
    for (const item of [
      "机器学习与数据挖掘",
      "统计学",
      "Python 程序设计",
      "数据库原理与应用",
      "管理决策模型与方法",
      "数据智能前沿",
      "本科生国家奖学金",
      "四川省优秀毕业生",
      "感恩科学家奖学金",
      "校级三好学生",
      "全国市场调查与分析大赛",
      "四川省一等奖",
      "全国企业竞争模拟大赛",
      "全国三等奖",
    ]) {
      await expect(swufe.getByText(item, { exact: true })).toBeVisible();
    }

    const pageWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(pageWidth).toBeLessThanOrEqual(viewport.width);
  });
}

test("education navigation lands below the header without private metrics", async ({
  page,
}) => {
  await page.goto("./");
  await page.getByRole("link", { name: "教育 / Education" }).click();

  await expect(page).toHaveURL(/#education$/);
  await expect(page.locator("#education")).toBeInViewport();
  await expect(page.locator("#education")).toHaveCSS(
    "scroll-margin-top",
    /[1-9]\d*px/,
  );

  const body = page.locator("body");
  for (const privateMetric of [
    "GPA",
    "专业排名",
    "单科成绩",
    "CET",
    "六级",
    "四级",
  ]) {
    await expect(body).not.toContainText(privateMetric);
  }
});

for (const viewport of viewports) {
  test(`AI Native explorations are public-safe on ${viewport.name}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("./");

    const focus = page.locator("#focus");
    await expect(
      focus.getByRole("heading", {
        level: 2,
        name: /AI Native.*AI 产品经理与独立开发者/s,
      }),
    ).toBeVisible();
    await expect(focus).toContainText("正在学习");

    const work = page.locator("#work");
    for (const projectName of [
      "Sprout / 芽",
      "SoulCompanion",
      "真实世界的视觉识别实验",
    ]) {
      await expect(
        work.getByRole("heading", { level: 3, name: projectName }),
      ).toBeVisible();
    }

    const sprout = work.getByRole("article").filter({
      has: page.getByRole("heading", { name: "Sprout / 芽" }),
    });
    await expect(sprout).toContainText("长期目标");
    await expect(sprout).toContainText("情绪记录");
    await expect(sprout).toContainText("用户研究");
    await expect(sprout).toContainText("PRD");
    await expect(
      sprout.getByRole("link", { name: /查看 Sprout GitHub/ }),
    ).toHaveAttribute(
      "href",
      "https://github.com/azhan12138/sprout-app-clean",
    );

    const soul = work.getByRole("article").filter({
      has: page.getByRole("heading", { name: "SoulCompanion" }),
    });
    await expect(soul).toContainText("记忆");
    await expect(soul).toContainText("情绪状态");
    await expect(soul).toContainText("主动关怀");
    await expect(
      soul.getByRole("link", { name: /查看 SoulCompanion GitHub/ }),
    ).toHaveAttribute(
      "href",
      "https://github.com/azhan12138/SoulCompanion",
    );

    const experiment = work.getByRole("article").filter({
      has: page.getByRole("heading", { name: "真实世界的视觉识别实验" }),
    });
    await expect(experiment).toContainText("进行中");
    for (const step of ["Context", "Spec", "Implement", "Evaluate"]) {
      await expect(experiment.getByText(step, { exact: true })).toBeVisible();
    }
    await expect(experiment).toContainText("真实数据验证");

    for (const image of await work.getByRole("img").all()) {
      await expect(image).toHaveAttribute("loading", "lazy");
      await expect(image).toHaveAttribute("width", /\d+/);
      await expect(image).toHaveAttribute("height", /\d+/);
    }

    const pageWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(pageWidth).toBeLessThanOrEqual(viewport.width);
  });
}

test("project links open safely and the ongoing experiment stays redacted", async ({
  page,
}) => {
  await page.goto("./");

  const externalLinks = page.locator("#work a[target='_blank']");
  await expect(externalLinks).toHaveCount(2);
  for (const link of await externalLinks.all()) {
    await expect(link).toHaveAttribute("rel", /noopener/);
  }

  const body = page.locator("body");
  for (const sensitiveDetail of [
    "客户名称",
    "训练数据",
    "模型参数",
    "业务系统截图",
    "准确率",
  ]) {
    await expect(body).not.toContainText(sensitiveDetail);
  }
});

for (const viewport of viewports) {
  test(`journey and contact are complete on ${viewport.name}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("./");

    const journey = page.locator("#journey");
    await expect(
      journey.getByRole("heading", {
        level: 2,
        name: /一路走来.*好奇心没有/s,
      }),
    ).toBeVisible();

    const milestones = journey.getByRole("listitem");
    await expect(milestones).toHaveCount(6);
    for (const milestone of [
      "从数据与管理出发",
      "用模型理解真实问题",
      "从分析走向业务决策",
      "开始做 AI 产品",
      "研究智能体，也亲手创造",
      "成为独立开发者",
    ]) {
      await expect(journey.getByText(milestone, { exact: true })).toBeVisible();
    }
    await expect(journey).toContainText("源氏木语");
    await expect(journey).toContainText("AI 售后辅助");
    await expect(journey).toContainText("模拟对练");
    await expect(journey).toContainText("客服数据洞察");

    const contact = page.locator("#contact");
    await expect(
      contact.getByRole("heading", {
        level: 2,
        name: /如果你也在想 AI 与人.*欢迎来聊聊/s,
      }),
    ).toBeVisible();
    await expect(
      contact.getByRole("link", { name: "18702530496@163.com" }),
    ).toHaveAttribute("href", "mailto:18702530496@163.com");
    await expect(
      contact.getByRole("link", { name: /GitHub.*azhan12138/ }),
    ).toHaveAttribute("href", "https://github.com/azhan12138");

    const pageWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(pageWidth).toBeLessThanOrEqual(viewport.width);
  });
}

test("journey and contact navigation work without exposing private resume data", async ({
  page,
}) => {
  await page.goto("./");

  await page.getByRole("link", { name: "经历 / Journey" }).click();
  await expect(page).toHaveURL(/#journey$/);
  await expect(page.locator("#journey")).toBeInViewport();

  await page.getByRole("link", { name: "联系 / Contact" }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator("#contact")).toBeInViewport();

  const github = page.locator("#contact").getByRole("link", {
    name: /GitHub.*azhan12138/,
  });
  await expect(github).toHaveAttribute("target", "_blank");
  await expect(github).toHaveAttribute("rel", /noopener/);

  await expect(page.locator("a[href^='tel:']")).toHaveCount(0);
  await expect(page.locator("a[download]")).toHaveCount(0);
  for (const privateDetail of [
    "15002873690@163.com",
    "联系电话",
    "手机号码",
    "准确率",
    "调用量",
    "覆盖率",
    "订单量",
    "提升幅度",
    "成本变化",
    "下载简历",
  ]) {
    await expect(page.locator("body")).not.toContainText(privateDetail);
  }
});

for (const viewport of releaseViewports) {
  test(`complete page keeps its intended structure on ${viewport.name}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("./");

    await expect(page.getByRole("navigation", { name: "主要导航" })).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 2 })).toHaveCount(5);

    const sectionOrder = await page.locator("main > section").evaluateAll(
      (sections) => sections.map((section) => section.id),
    );
    expect(sectionOrder).toEqual([
      "hero",
      "education",
      "focus",
      "work",
      "journey",
    ]);
    await expect(page.locator("footer#contact")).toBeVisible();

    const pageWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(pageWidth).toBeLessThanOrEqual(viewport.width);
  });
}

test("page metadata is ready for search and social sharing", async ({ page }) => {
  await page.goto("./");

  await expect(page).toHaveTitle("罗仕展｜AI Native 产品经理与独立开发者");
  await expect(page.locator("meta[name='description']")).toHaveAttribute(
    "content",
    "罗仕展的个人主页：上海交通大学硕士生，专注 AI Native 的 AI 产品经理与独立开发者。",
  );
  await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
    "href",
    "https://azhan12138.github.io/personal_web/",
  );
  await expect(page.locator("meta[property='og:title']")).toHaveAttribute(
    "content",
    "罗仕展｜AI Native 产品经理与独立开发者",
  );
  await expect(page.locator("meta[property='og:description']")).toHaveAttribute(
    "content",
    /上海交通大学硕士生.*AI Native/,
  );
  await expect(page.locator("meta[property='og:image']")).toHaveAttribute(
    "content",
    "https://azhan12138.github.io/personal_web/assets/portrait-primary.jpg",
  );
});

test("keyboard focus is visible and reduced motion keeps content available", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("./");

  await page.keyboard.press("Tab");
  const focusedLink = page.getByRole("link", { name: "返回主页顶部" });
  await expect(focusedLink).toBeFocused();
  await expect(focusedLink).toHaveCSS("outline-style", "solid");

  for (const region of [
    page.locator("#education"),
    page.locator("#focus"),
    page.locator("#work"),
    page.locator("#journey"),
  ]) {
    await expect(region).toHaveCSS("opacity", "1");
    await expect(region).toHaveCSS("transform", "none");
  }

  const html = await page.content();
  for (const forbidden of [
    "15002873690@163.com",
    "GPA",
    "专业排名",
    "单科成绩",
    "准确率",
    "调用量",
    "覆盖率",
    "提升幅度",
    "成本变化",
    "THROWAWAY PROTOTYPE",
    "Research Brief / 研究简报",
    "Open Notebook / 开放笔记",
  ]) {
    expect(html).not.toContain(forbidden);
  }
});
