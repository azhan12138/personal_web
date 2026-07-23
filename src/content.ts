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

export interface SiteContent {
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroContent;
}

export const siteContent = {
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
} as const satisfies SiteContent;
