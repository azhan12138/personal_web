export interface NavigationItem {
  readonly label: string;
  readonly href: `#${string}`;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string, string];
  readonly statement: string;
  readonly role: string;
  readonly location: string;
  readonly status: string;
  readonly portrait: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
}

export interface Competition {
  readonly year: string;
  readonly name: string;
  readonly result: string;
}

export interface EducationEntry {
  readonly period: string;
  readonly dateTime: string;
  readonly stage: string;
  readonly city: string;
  readonly school: string;
  readonly schoolEn: string;
  readonly college: string;
  readonly degree: string;
  readonly summary: string;
  readonly courses: readonly string[];
  readonly focus?: string;
  readonly honors?: readonly string[];
  readonly competitions?: readonly Competition[];
}

export interface EducationContent {
  readonly eyebrow: string;
  readonly heading: readonly [string, string];
  readonly introduction: string;
  readonly entries: readonly EducationEntry[];
}

export interface SiteContent {
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroContent;
  readonly education: EducationContent;
}

export const siteContent: SiteContent = {
  navigation: [
    { label: "教育 / Education", href: "#education" },
    { label: "探索 / Work", href: "#work" },
    { label: "经历 / Journey", href: "#journey" },
    { label: "联系 / Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "AI PRODUCT · INDEPENDENT BUILDER · 2026",
    heading: ["罗仕展，", "在产品与智能体之间", "寻找新的创造方式。"],
    statement: "我想看看，AI 能不能让一个人的想法走得更远。",
    role: "专注 AI Native 的 AI 产品经理与独立开发者",
    location: "目前在上海",
    status: "上海交通大学管理科学与工程硕士在读",
    portrait: {
      src: "assets/portrait-primary.jpg",
      alt: "罗仕展在思考者雕塑前的照片",
      width: 630,
      height: 630,
    },
  },
  education: {
    eyebrow: "01 / EDUCATION & ACADEMIC FOUNDATION",
    heading: ["教育经历，", "是我理解问题的起点。"],
    introduction:
      "从数据、建模与商业分析，到运筹优化、强化学习与智能体研究，我的学习路径也构成了今天做 AI 产品的底层方法。",
    entries: [
      {
        period: "2025.09 — 2028.03",
        dateTime: "2025-09/2028-03",
        stage: "硕士在读",
        city: "上海",
        school: "上海交通大学",
        schoolEn: "SHANGHAI JIAO TONG UNIVERSITY",
        college: "安泰经济与管理学院",
        degree: "管理科学与工程 · 硕士",
        summary:
          "在运筹与数据分析的基础上，开始系统接触强化学习、智能体建模与仿真，并持续在这一方向学习与深耕。",
        courses: [
          "运筹学：确定性模型",
          "运筹学：随机性模型",
          "计算文本分析",
          "强化学习",
          "多元统计分析",
          "智能体建模与仿真",
        ],
        focus:
          "持续探索 Agent 的决策、协作与模拟机制，以及它们如何进入真实产品与研发流程。相关研究仍在进行中。",
      },
      {
        period: "2021.09 — 2025.06",
        dateTime: "2021-09/2025-06",
        stage: "本科",
        city: "成都",
        school: "西南财经大学",
        schoolEn: "SOUTHWESTERN UNIVERSITY OF FINANCE AND ECONOMICS",
        college: "管理科学与工程学院",
        degree: "大数据管理与应用 · 学士",
        summary:
          "在统计、编程与管理决策之间建立跨学科基础，也通过研究与竞赛第一次把模型用于解释真实世界的问题。",
        courses: [
          "机器学习与数据挖掘",
          "统计学",
          "Python 程序设计",
          "数据库原理与应用",
          "管理决策模型与方法",
          "数据智能前沿",
        ],
        honors: [
          "本科生国家奖学金",
          "四川省优秀毕业生",
          "感恩科学家奖学金",
          "校级三好学生",
        ],
        competitions: [
          {
            year: "2024",
            name: "全国市场调查与分析大赛",
            result: "四川省一等奖",
          },
          {
            year: "2023",
            name: "全国企业竞争模拟大赛",
            result: "全国三等奖",
          },
        ],
      },
    ],
  },
};
